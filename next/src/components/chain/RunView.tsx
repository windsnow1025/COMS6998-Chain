import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import {AdminPipelineStepResDtoStepEnum, ChainResDto, RunResDto, RunResDtoStatusEnum} from '@/client/nest';
import ChainClient from '@/lib/chain/ChainClient';
import {formatInstant} from '@/lib/chain/Format';
import {SharedSteps, stepNumber} from '@/lib/chain/Rules';
import {HoverSx} from './HoverSx';
import LoadFailure from './LoadFailure';
import PromptBlock from './PromptBlock';
import ResponseBlock from './ResponseBlock';
import {progressOf, RunAnswer, statusChip} from './RunPanel';
import {useToast} from './Toast';
import VoiceDot from './VoiceDot';
import {useBase} from './WeekBase';

const PollIntervalMs = 2000;

// How long the run took, once it ended
function durationOf(run: RunResDto): string | null {
  if (!run.finishedAt) {
    return null;
  }
  const seconds = (new Date(run.finishedAt).getTime() - new Date(run.createdAt).getTime()) / 1000;
  return `${seconds.toFixed(1)}s in all`;
}

// A run of a chain on a photo: the photo, the answer, the description the shared step wrote for the photo, and the
// request of each of the chain's own steps with its prompts and its response
export default function RunView({chainId, runId}: { chainId: string; runId: string }) {
  const toast = useToast();
  const router = useRouter();
  const base = useBase();
  const [chain, setChain] = React.useState<ChainResDto | null>(null);
  const [run, setRun] = React.useState<RunResDto | null>(null);
  const [failure, setFailure] = React.useState<string | null>(null);
  const [attempt, setAttempt] = React.useState(0);
  const [starting, setStarting] = React.useState(false);

  React.useEffect(() => {
    let active = true;
    const load = async () => {
      const client = new ChainClient();
      try {
        const [fetchedChain, fetchedRun] = await Promise.all([client.fetchChain(chainId), client.fetchRun(chainId, runId)]);
        if (active) {
          setChain(fetchedChain);
          setRun(fetchedRun);
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
  }, [chainId, runId, attempt]);

  // A run still going is read again until it ends
  React.useEffect(() => {
    if (!run || run.status !== RunResDtoStatusEnum.Running) {
      return;
    }
    const timer = setInterval(async () => {
      try {
        setRun(await new ChainClient().fetchRun(chainId, runId));
      } catch (error) {
        toast.show((error as Error).message, 'error');
      }
    }, PollIntervalMs);
    return () => clearInterval(timer);
    // toast is stable
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainId, runId, run?.status]);

  if (failure) {
    return (
      <LoadFailure
        message={failure}
        onRetry={() => {
          setFailure(null);
          setAttempt((count) => count + 1);
        }}
      />
    );
  }

  if (!chain || !run) {
    return (
      <Box className="flex-center" sx={{minHeight: '50vh'}}>
        <CircularProgress/>
      </Box>
    );
  }

  const running = run.status === RunResDtoStatusEnum.Running;
  const duration = durationOf(run);

  // The same chain on the same photo again, followed on the new run's page
  const runAgain = async () => {
    setStarting(true);
    try {
      const started = await new ChainClient().createRun(chainId, run.photo.id);
      await router.push(`${base}/chains/${chainId}/runs/${started.id}`);
    } catch (error) {
      toast.show((error as Error).message, 'error');
      setStarting(false);
    }
  };

  return (
    <Box className="flex-column" sx={{gap: 3}}>
      <Head>
        <title>{`${chain.name} run | Daily Roast Chains`}</title>
      </Head>
      <Card variant="outlined" sx={{...HoverSx, p: 2}}>
        <Box className="flex-between" sx={{gap: 2}}>
          <Box className="flex-normal" sx={{gap: 1, flex: 1, minWidth: 0}}>
            <VoiceDot color={chain.color}/>
            <Typography variant="h6" component="h1">
              <Link href={`${base}/chains/${chain.id}`}>{chain.name}</Link>
            </Typography>
            {statusChip(run.status)}
            <Typography variant="body2" color="text.secondary">{formatInstant(run.createdAt)}</Typography>
            {duration && <Typography variant="body2" color="text.secondary">{duration}</Typography>}
            {run.user && <Typography variant="body2" color="text.secondary">by {run.user.username}</Typography>}
          </Box>
          <Tooltip title={running ? 'A run is in progress' : ''}>
            <span>
              <Button variant="outlined" startIcon={<ReplayRoundedIcon/>} disabled={running || starting} onClick={runAgain}>
                Run again on this photo
              </Button>
            </span>
          </Tooltip>
        </Box>
      </Card>

      <Box className="flex-start-start" sx={{gap: 3}}>
        <Card variant="outlined" sx={{...HoverSx, p: 2, flex: '1 1 320px'}}>
          <Typography variant="subtitle1" gutterBottom>Photo</Typography>
          <Box
            component="img"
            src={run.photo.url}
            alt=""
            sx={{width: '100%', maxWidth: 480, borderRadius: 1, display: 'block', bgcolor: 'action.hover'}}
          />
          {run.photo.place && (
            <Typography variant="body2" color="text.secondary" sx={{mt: 1.5}}>{run.photo.place}</Typography>
          )}
        </Card>
        <Card variant="outlined" sx={{...HoverSx, p: 2, flex: '1 1 320px'}}>
          <Typography variant="subtitle1" gutterBottom>Answer</Typography>
          {running ? (
            <Box className="flex-normal" sx={{gap: 1}}>
              <CircularProgress size={16}/>
              <Typography variant="body2" color="text.secondary">{progressOf(run)}</Typography>
            </Box>
          ) : (
            <RunAnswer run={run}/>
          )}
        </Card>
      </Box>

      <Box className="flex-column" sx={{gap: 2}}>
        <Card variant="outlined" sx={{...HoverSx, p: 2}}>
          <Box className="flex-normal" sx={{gap: 1, mb: 1.5}}>
            <Chip size="small" color="primary" variant="outlined" label={`Step ${SharedSteps}: ${AdminPipelineStepResDtoStepEnum.Describe}`}/>
            <Chip size="small" variant="outlined" label="shared by every chain"/>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{mb: 1.5}}>
            The photo&apos;s description, written once when the photo was uploaded: the run read it and made no request
            for it.
          </Typography>
          <PromptBlock label="Description" text={run.photo.description}/>
        </Card>
        {run.calls.map((call, index) => (
          <Card key={call.id} variant="outlined" sx={{...HoverSx, p: 2}}>
            <Box className="flex-normal" sx={{gap: 1, mb: 1.5}}>
              <Chip size="small" color="primary" variant="outlined" label={`Step ${stepNumber(index)}: ${call.step}`}/>
              <Chip size="small" label={call.model}/>
              <Chip size="small" label={`${call.inputTokens} in / ${call.outputTokens} out`}/>
              <Chip size="small" label={`${(call.durationMs / 1000).toFixed(1)}s`}/>
              <Chip size="small" label={formatInstant(call.createdAt)}/>
            </Box>
            <Box className="flex-column" sx={{gap: 1.5}}>
              <PromptBlock label="System prompt" text={call.systemPrompt}/>
              <PromptBlock label="User prompt" text={call.userPrompt}/>
              <ResponseBlock response={call.response}/>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
