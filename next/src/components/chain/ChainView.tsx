import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import {
  AdminModelResDto,
  AdminPhotoResDto,
  AdminScreeningResDto,
  ChainCaptionPageResDto,
  ChainResDto,
  PlaceholderResDto,
  RunPageResDto,
  RunResDto,
  RunResDtoStatusEnum,
  StepReqDto,
  StepResDto,
  StepResDtoInputEnum,
  StepResDtoOutputEnum,
} from '@/client/nest';
import ChainClient from '@/lib/chain/ChainClient';
import {formatInstant, truncate} from '@/lib/chain/Format';
import {captionsHold, MinVoicesInMix, MixKeepsMinimum, MixNeedsCaptions, writesCaptions} from '@/lib/chain/Rules';
import ChainDialog, {ChainValues} from './ChainDialog';
import ConfirmDialog from './ConfirmDialog';
import ExpandButton from './ExpandButton';
import {HoverSx} from './HoverSx';
import LoadFailure from './LoadFailure';
import PhotoPickerDialog from './PhotoPickerDialog';
import PromptsCollapse from './PromptsCollapse';
import RunPanel, {statusChip} from './RunPanel';
import ScreeningCard from './ScreeningCard';
import StepDialog from './StepDialog';
import {useToast} from './Toast';
import VoiceDot from './VoiceDot';
import {useBase} from './WeekBase';

const PageSize = 10;
const PollIntervalMs = 2000;
const MixSwitchId = 'chain-in-the-mix';
// The API's refusals: to delete a chain in the mix, and to run a chain without a step
const InMixHold = 'Take the chain out of the mix first';
const NoStepHold = 'The chain has no step to run';

// Why a step's moves and its delete are refused; empty where they are not
interface StepHolds {
  up: string;
  down: string;
  remove: string;
}

function PhotoThumb({url}: { url: string }) {
  return (
    <Box
      component="img"
      src={url}
      alt=""
      sx={{width: 48, height: 36, borderRadius: 1, objectFit: 'cover', bgcolor: 'action.hover', display: 'block'}}
    />
  );
}

// One step of the chain: what it looks at, what it answers, its model, and its prompts behind a chevron, with the
// ways to move, edit, and delete it; a held way shows its hold in place of its name
function StepCard({step, count, busy, holds, onMove, onEdit, onDelete}: {
  step: StepResDto;
  count: number;
  busy: boolean;
  holds: StepHolds;
  onMove: (delta: -1 | 1) => void;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <Card variant="outlined" sx={{...HoverSx, p: 2}}>
      <Box className="flex-between" sx={{gap: 1}}>
        <Box className="flex-normal" sx={{gap: 1, flex: 1, minWidth: 0}}>
          <Chip size="small" color="primary" variant="outlined" label={`Step ${step.position + 1}: ${step.name}`}/>
          <Chip size="small" label={step.input === StepResDtoInputEnum.Image ? 'photo in' : 'text in'}/>
          <Chip size="small" label={`${step.output} out`}/>
          <Chip size="small" label={`${step.apiType} · ${step.model}`}/>
          <Chip size="small" label={`temperature ${step.temperature}`}/>
        </Box>
        <Box className="flex-normal" sx={{gap: 0.5, flexShrink: 0}}>
          <Tooltip title={holds.up || 'Move up'}>
            <span>
              <IconButton
                size="small"
                aria-label="Move the step up"
                disabled={busy || step.position === 0 || holds.up !== ''}
                onClick={() => onMove(-1)}
              >
                <ArrowUpwardRoundedIcon fontSize="small"/>
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title={holds.down || 'Move down'}>
            <span>
              <IconButton
                size="small"
                aria-label="Move the step down"
                disabled={busy || step.position === count - 1 || holds.down !== ''}
                onClick={() => onMove(1)}
              >
                <ArrowDownwardRoundedIcon fontSize="small"/>
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title="Edit">
            <span>
              <IconButton size="small" aria-label="Edit the step" disabled={busy} onClick={onEdit}>
                <EditRoundedIcon fontSize="small"/>
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title={holds.remove || 'Delete'}>
            <span>
              <IconButton size="small" aria-label="Delete the step" disabled={busy || holds.remove !== ''} onClick={onDelete}>
                <DeleteRoundedIcon fontSize="small"/>
              </IconButton>
            </span>
          </Tooltip>
          <ExpandButton open={open} label={`Prompts of step ${step.position + 1}`} onClick={() => setOpen(!open)}/>
        </Box>
      </Box>
      <PromptsCollapse open={open} systemPrompt={step.systemPrompt} userPrompt={step.userPrompt}/>
    </Card>
  );
}

// A voice's chain: its own fields and its place in the mix, the screening it starts from, its steps in order, a run
// of it on a photo, and what it wrote, in runs and for the product
export default function ChainView({id}: { id: string }) {
  const toast = useToast();
  const router = useRouter();
  const base = useBase();
  const [chain, setChain] = React.useState<ChainResDto | null>(null);
  // Every chain, for the count in the mix
  const [chains, setChains] = React.useState<ChainResDto[]>([]);
  const [screening, setScreening] = React.useState<AdminScreeningResDto | null>(null);
  const [models, setModels] = React.useState<AdminModelResDto[]>([]);
  const [placeholders, setPlaceholders] = React.useState<PlaceholderResDto[]>([]);
  const [failure, setFailure] = React.useState<string | null>(null);
  const [attempt, setAttempt] = React.useState(0);
  const [runs, setRuns] = React.useState<RunPageResDto | null>(null);
  const [runsFailure, setRunsFailure] = React.useState<string | null>(null);
  const [runsPage, setRunsPage] = React.useState(0);
  const [captions, setCaptions] = React.useState<ChainCaptionPageResDto | null>(null);
  const [captionsFailure, setCaptionsFailure] = React.useState<string | null>(null);
  const [captionsPage, setCaptionsPage] = React.useState(0);
  // The run started from this page, followed until it ends
  const [liveRun, setLiveRun] = React.useState<RunResDto | null>(null);
  const [editing, setEditing] = React.useState(false);
  const [stepDialog, setStepDialog] = React.useState<{ open: boolean; step: StepResDto | null }>({open: false, step: null});
  const [deletingChain, setDeletingChain] = React.useState(false);
  const [deletingStep, setDeletingStep] = React.useState<StepResDto | null>(null);
  const [picking, setPicking] = React.useState(false);
  const [saving, setSaving] = React.useState(false);
  const [busy, setBusy] = React.useState(false);

  const retry = () => {
    setFailure(null);
    setRunsFailure(null);
    setCaptionsFailure(null);
    setAttempt((count) => count + 1);
  };

  React.useEffect(() => {
    let active = true;
    const load = async () => {
      const client = new ChainClient();
      try {
        const [fetchedChain, fetchedChains, fetchedScreening, fetchedModels, fetchedPlaceholders] = await Promise.all([
          client.fetchChain(id),
          client.fetchChains(),
          client.fetchScreening(),
          client.fetchModels(),
          client.fetchPlaceholders(),
        ]);
        if (active) {
          setChain(fetchedChain);
          setChains(fetchedChains);
          setScreening(fetchedScreening);
          setModels(fetchedModels);
          setPlaceholders(fetchedPlaceholders);
        }
      } catch (error) {
        if (active) {
          setFailure((error as Error).message);
        }
      }
    };
    load();
    return () => {
      active = false;
    };
  }, [id, attempt]);

  const liveRunDone = liveRun !== null && liveRun.status !== RunResDtoStatusEnum.Running;

  // The list shows a run started here from its start, and its outcome from its end
  React.useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const fetched = await new ChainClient().fetchRuns(id, PageSize, runsPage * PageSize);
        if (active) {
          setRuns(fetched);
        }
      } catch (error) {
        if (active) {
          setRunsFailure((error as Error).message);
        }
      }
    };
    load();
    return () => {
      active = false;
    };
  }, [id, runsPage, liveRun?.id, liveRunDone, attempt]);

  React.useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const fetched = await new ChainClient().fetchCaptions(id, PageSize, captionsPage * PageSize);
        if (active) {
          setCaptions(fetched);
        }
      } catch (error) {
        if (active) {
          setCaptionsFailure((error as Error).message);
        }
      }
    };
    load();
    return () => {
      active = false;
    };
  }, [id, captionsPage, attempt]);

  // The run's steps complete after the answer, so the run is read again until it ends
  React.useEffect(() => {
    if (!liveRun || liveRun.status !== RunResDtoStatusEnum.Running) {
      return;
    }
    const runId = liveRun.id;
    const timer = setInterval(async () => {
      try {
        const fetched = await new ChainClient().fetchRun(id, runId);
        setLiveRun((current) => (current?.id === runId ? fetched : current));
      } catch (error) {
        toast.show((error as Error).message, 'error');
      }
    }, PollIntervalMs);
    return () => clearInterval(timer);
    // toast is stable
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, liveRun?.id, liveRun?.status]);

  if (failure) {
    return <LoadFailure message={failure} onRetry={retry}/>;
  }

  if (!chain || !screening) {
    return (
      <Box className="flex-center" sx={{minHeight: '50vh'}}>
        <CircularProgress/>
      </Box>
    );
  }

  // The holds the API would answer, applied before the click; each is empty where the action is allowed
  const inMixCount = chains.filter((row) => row.inMix).length;
  const mixHold = chain.inMix
    ? (inMixCount <= MinVoicesInMix ? MixKeepsMinimum : '')
    : (chain.writesCaptions ? '' : MixNeedsCaptions);
  const deleteHold = chain.inMix ? InMixHold : chain.captions > 0 ? captionsHold(chain.captions) : '';
  // A change of the steps of a chain in the mix keeps it writing captions
  const holdOn = (steps: Pick<StepResDto, 'output'>[]): string => (chain.inMix && !writesCaptions(steps) ? MixNeedsCaptions : '');
  const moved = (index: number, delta: -1 | 1): StepResDto[] => {
    const next = [...chain.steps];
    const [row] = next.splice(index, 1);
    next.splice(index + delta, 0, row);
    return next;
  };
  const holdsOf = (index: number): StepHolds => ({
    up: index > 0 ? holdOn(moved(index, -1)) : '',
    down: index < chain.steps.length - 1 ? holdOn(moved(index, 1)) : '',
    remove: holdOn(chain.steps.filter((_, position) => position !== index)),
  });
  const editingStep = stepDialog.step;
  const textOutputHold = editingStep
    ? holdOn(chain.steps.map((row) => (row.id === editingStep.id ? {output: StepResDtoOutputEnum.Text} : row)))
    : holdOn([...chain.steps, {output: StepResDtoOutputEnum.Text}]);
  const running = liveRun !== null && !liveRunDone;
  const pickHold = chain.steps.length === 0 ? NoStepHold : running ? 'A run is in progress' : '';
  const runHref = (runId: string) => `${base}/chains/${id}/runs/${runId}`;

  const report = (error: unknown) => toast.show((error as Error).message, 'error');

  const toggleMix = async (inMix: boolean) => {
    setBusy(true);
    try {
      const updated = await new ChainClient().updateChain(id, {inMix});
      setChain(updated);
      setChains((rows) => rows.map((row) => (row.id === updated.id ? updated : row)));
      toast.show(inMix ? `${chain.name} is in the mix.` : `${chain.name} is out of the mix.`, 'success');
    } catch (error) {
      report(error);
    }
    setBusy(false);
  };

  const saveChain = async (values: ChainValues) => {
    setSaving(true);
    try {
      setChain(await new ChainClient().updateChain(id, {name: values.name, tagline: values.tagline, color: values.color}));
      toast.show('Chain updated.', 'success');
      setEditing(false);
    } catch (error) {
      report(error);
    }
    setSaving(false);
  };

  const deleteChain = async () => {
    try {
      await new ChainClient().deleteChain(id);
      toast.show('Chain deleted.', 'success');
      await router.push(base);
    } catch (error) {
      report(error);
      setDeletingChain(false);
    }
  };

  const saveStep = async (dto: StepReqDto) => {
    setSaving(true);
    const client = new ChainClient();
    try {
      setChain(stepDialog.step ? await client.updateStep(id, stepDialog.step.id, dto) : await client.addStep(id, dto));
      toast.show(stepDialog.step ? 'Step updated.' : 'Step added.', 'success');
      setStepDialog({open: false, step: null});
    } catch (error) {
      report(error);
    }
    setSaving(false);
  };

  const deleteStep = async () => {
    if (!deletingStep) {
      return;
    }
    setBusy(true);
    try {
      setChain(await new ChainClient().deleteStep(id, deletingStep.id));
      toast.show('Step deleted.', 'success');
      setDeletingStep(null);
    } catch (error) {
      report(error);
    }
    setBusy(false);
  };

  const moveStep = async (index: number, delta: -1 | 1) => {
    setBusy(true);
    try {
      setChain(await new ChainClient().reorderSteps(id, moved(index, delta).map((row) => row.id)));
    } catch (error) {
      report(error);
    }
    setBusy(false);
  };

  const runOn = async (photo: AdminPhotoResDto) => {
    setPicking(false);
    try {
      setLiveRun(await new ChainClient().createRun(id, photo.id));
    } catch (error) {
      report(error);
    }
  };

  return (
    <Box className="flex-column" sx={{gap: 3}}>
      <Head>
        <title>{`${chain.name} | Daily Roast Chains`}</title>
      </Head>
      <Card variant="outlined" sx={HoverSx}>
        <Box className="flex-between" sx={{p: 2, gap: 2}}>
          <Box sx={{flex: 1, minWidth: 0}}>
            <Box className="flex-normal" sx={{gap: 1}}>
              <VoiceDot color={chain.color}/>
              <Typography variant="h6" component="h1">{chain.name}</Typography>
              <Chip size="small" variant="outlined" label={chain.slug}/>
            </Box>
            <Typography variant="body2" color="text.secondary">{chain.tagline}</Typography>
          </Box>
          <Box className="flex-normal" sx={{gap: 1.5}}>
            <Box className="flex-normal" sx={{gap: 0.5}}>
              <Tooltip title={mixHold}>
                <span>
                  <Switch
                    id={MixSwitchId}
                    checked={chain.inMix}
                    disabled={busy || mixHold !== ''}
                    onChange={(event) => toggleMix(event.target.checked)}
                    slotProps={{input: {'aria-label': 'In the mix'}}}
                  />
                </span>
              </Tooltip>
              <Typography variant="body2" component="label" htmlFor={MixSwitchId}>In the mix</Typography>
            </Box>
            <Button variant="outlined" startIcon={<EditRoundedIcon/>} onClick={() => setEditing(true)}>Edit</Button>
            <Tooltip title={deleteHold}>
              <span>
                <Button variant="outlined" startIcon={<DeleteRoundedIcon/>} disabled={deleteHold !== ''} onClick={() => setDeletingChain(true)}>
                  Delete
                </Button>
              </span>
            </Tooltip>
          </Box>
        </Box>
      </Card>

      <ScreeningCard screening={screening}/>

      <Card variant="outlined" sx={HoverSx}>
        <Box className="flex-between" sx={{p: 2, pb: 1, gap: 2}}>
          <Box sx={{flex: 1, minWidth: 0}}>
            <Typography variant="subtitle1">Steps</Typography>
            <Typography variant="body2" color="text.secondary">
              Run in order on a photo after its screening; the last step&apos;s captions are the voice&apos;s.
              {' '}{MixNeedsCaptions}.
            </Typography>
          </Box>
          <Button variant="contained" startIcon={<AddRoundedIcon/>} onClick={() => setStepDialog({open: true, step: null})} sx={{flexShrink: 0}}>
            Add step
          </Button>
        </Box>
        <Box className="flex-column" sx={{gap: 2, p: 2, pt: 1}}>
          {chain.steps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              count={chain.steps.length}
              busy={busy}
              holds={holdsOf(index)}
              onMove={(delta) => moveStep(index, delta)}
              onEdit={() => setStepDialog({open: true, step})}
              onDelete={() => setDeletingStep(step)}
            />
          ))}
          {chain.steps.length === 0 && (
            <Typography variant="body2" color="text.secondary">No step yet. The chain writes nothing until it has one.</Typography>
          )}
        </Box>
      </Card>

      <Card variant="outlined" sx={HoverSx}>
        <Box className="flex-between" sx={{p: 2, gap: 2}}>
          <Box sx={{flex: 1, minWidth: 0}}>
            <Typography variant="subtitle1">Run the chain</Typography>
            <Typography variant="body2" color="text.secondary">
              Runs the steps on a photo of the library. The answer stays here, not among the photo&apos;s captions.
            </Typography>
          </Box>
          <Tooltip title={pickHold}>
            <span>
              <Button
                variant="contained"
                startIcon={<PhotoLibraryRoundedIcon/>}
                disabled={pickHold !== ''}
                onClick={() => setPicking(true)}
              >
                Pick a photo
              </Button>
            </span>
          </Tooltip>
        </Box>
        {liveRun && (
          <Box sx={{px: 2, pb: 2}}>
            <RunPanel run={liveRun} href={runHref(liveRun.id)}/>
          </Box>
        )}
      </Card>

      <Card variant="outlined" sx={HoverSx}>
        <Box sx={{p: 2, pb: 1}}>
          <Typography variant="subtitle1">Runs</Typography>
          <Typography variant="body2" color="text.secondary">The chain run on photos from this page, newest first.</Typography>
        </Box>
        {runsFailure ? (
          <LoadFailure message={runsFailure} onRetry={retry} minHeight={120}/>
        ) : !runs ? (
          <Box className="flex-center" sx={{minHeight: 120}}>
            <CircularProgress/>
          </Box>
        ) : (
          <>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>When</TableCell>
                  <TableCell>Photo</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Answer</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {runs.runs.map((run) => (
                  <TableRow key={run.id} hover sx={{cursor: 'pointer'}} onClick={() => router.push(runHref(run.id))}>
                    <TableCell sx={{whiteSpace: 'nowrap'}}>
                      <Link href={runHref(run.id)} onClick={(event) => event.stopPropagation()}>{formatInstant(run.createdAt)}</Link>
                    </TableCell>
                    <TableCell><PhotoThumb url={run.photo.url}/></TableCell>
                    <TableCell>{statusChip(run.status)}</TableCell>
                    <TableCell>
                      <Typography variant="body2" color={run.error ? 'error.main' : 'text.secondary'} sx={{maxWidth: 480}}>
                        {run.error ?? truncate(run.captions ? run.captions.join(' / ') : (run.text ?? ''), 160)}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
                {runs.runs.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4}>
                      <Typography variant="body2" color="text.secondary">No run yet.</Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            {runs.total > PageSize && (
              <TablePagination
                component="div"
                count={runs.total}
                page={runsPage}
                onPageChange={(_event, next) => setRunsPage(next)}
                rowsPerPage={PageSize}
                rowsPerPageOptions={[PageSize]}
              />
            )}
          </>
        )}
      </Card>

      <Card variant="outlined" sx={HoverSx}>
        <Box sx={{p: 2, pb: 1}}>
          <Typography variant="subtitle1">Captions in the product</Typography>
          <Typography variant="body2" color="text.secondary">
            What the chain wrote for the photos of the product, newest first. Kept captions are the ones voters see;
            picks are their up-votes.
          </Typography>
        </Box>
        {captionsFailure ? (
          <LoadFailure message={captionsFailure} onRetry={retry} minHeight={120}/>
        ) : !captions ? (
          <Box className="flex-center" sx={{minHeight: 120}}>
            <CircularProgress/>
          </Box>
        ) : (
          <>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>When</TableCell>
                  <TableCell>Photo</TableCell>
                  <TableCell>Caption</TableCell>
                  <TableCell>Kept</TableCell>
                  <TableCell align="right">Picks</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {captions.captions.map((caption) => (
                  <TableRow key={caption.id}>
                    <TableCell sx={{whiteSpace: 'nowrap'}}>{formatInstant(caption.createdAt)}</TableCell>
                    <TableCell><PhotoThumb url={caption.photo.url}/></TableCell>
                    <TableCell>{caption.content}</TableCell>
                    <TableCell>{caption.kept ? 'Yes' : 'No'}</TableCell>
                    <TableCell align="right">{caption.picks}</TableCell>
                  </TableRow>
                ))}
                {captions.captions.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5}>
                      <Typography variant="body2" color="text.secondary">No caption yet.</Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            {captions.total > PageSize && (
              <TablePagination
                component="div"
                count={captions.total}
                page={captionsPage}
                onPageChange={(_event, next) => setCaptionsPage(next)}
                rowsPerPage={PageSize}
                rowsPerPageOptions={[PageSize]}
              />
            )}
          </>
        )}
      </Card>

      <ChainDialog open={editing} chain={chain} saving={saving} onClose={() => setEditing(false)} onSave={saveChain}/>
      <StepDialog
        open={stepDialog.open}
        step={stepDialog.step}
        models={models}
        placeholders={placeholders}
        textOutputHold={textOutputHold}
        saving={saving}
        onClose={() => setStepDialog({open: false, step: null})}
        onSave={saveStep}
      />
      <ConfirmDialog
        open={deletingChain}
        title="Delete this chain?"
        body="Its steps and its runs go with it. A deleted chain cannot be restored."
        confirmLabel="Delete"
        onConfirm={deleteChain}
        onClose={() => setDeletingChain(false)}
      />
      <ConfirmDialog
        open={deletingStep !== null}
        title="Delete this step?"
        body="The steps after it move up. A deleted step cannot be restored."
        confirmLabel="Delete"
        onConfirm={deleteStep}
        onClose={() => setDeletingStep(null)}
      />
      <PhotoPickerDialog open={picking} onClose={() => setPicking(false)} onPick={runOn}/>
    </Box>
  );
}
