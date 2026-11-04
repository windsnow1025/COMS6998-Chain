import * as React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import {ChainResDto} from '@/client/nest';
import ChainClient from '@/lib/chain/ChainClient';
import {MinVoicesInMix} from '@/lib/chain/Rules';
import ChainDialog, {ChainValues} from './ChainDialog';
import {HoverSx} from './HoverSx';
import LoadFailure from './LoadFailure';
import {useToast} from './Toast';
import {useBase} from './WeekBase';
import VoiceDot from './VoiceDot';

// The voices as prompt chains; a row opens the chain, and a new chain starts out of the mix with no step
export default function ChainsView() {
  const toast = useToast();
  const router = useRouter();
  const base = useBase();
  const [chains, setChains] = React.useState<ChainResDto[] | null>(null);
  const [failure, setFailure] = React.useState<string | null>(null);
  const [attempt, setAttempt] = React.useState(0);
  const [adding, setAdding] = React.useState(false);
  const [saving, setSaving] = React.useState(false);

  React.useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const fetched = await new ChainClient().fetchChains();
        if (active) {
          setChains(fetched);
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
  }, [attempt]);

  const create = async (values: ChainValues) => {
    setSaving(true);
    try {
      const chain = await new ChainClient().createChain(values);
      toast.show('Chain added. Give it a step that writes captions.', 'success');
      await router.push(`${base}/chains/${chain.id}`);
    } catch (error) {
      toast.show((error as Error).message, 'error');
      setSaving(false);
    }
  };

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

  if (!chains) {
    return (
      <Box className="flex-center" sx={{minHeight: '50vh'}}>
        <CircularProgress/>
      </Box>
    );
  }

  const inMix = chains.filter((chain) => chain.inMix).length;

  return (
    <Card variant="outlined" sx={HoverSx}>
      <Box className="flex-between" sx={{p: 2, pb: 1, gap: 2}}>
        <Box sx={{flex: 1, minWidth: 0}}>
          <Typography variant="subtitle1">Prompt chains</Typography>
          <Typography variant="body2" color="text.secondary">
            Each chain is a voice of the product: its steps write a photo&apos;s caption in that voice.
            In the mix: {inMix} of {chains.length}, at least {MinVoicesInMix}.
          </Typography>
        </Box>
        <Button variant="contained" startIcon={<AddRoundedIcon/>} onClick={() => setAdding(true)} sx={{flexShrink: 0}}>
          Add chain
        </Button>
      </Box>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Chain</TableCell>
            <TableCell>Tagline</TableCell>
            <TableCell align="right">Steps</TableCell>
            <TableCell>In the mix</TableCell>
            <TableCell align="right">Captions</TableCell>
            <TableCell align="right">Runs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {chains.map((chain) => {
            const href = `${base}/chains/${chain.id}`;
            return (
              <TableRow key={chain.id} hover sx={{cursor: 'pointer'}} onClick={() => router.push(href)}>
                <TableCell>
                  <Box className="flex-normal" sx={{gap: 1}}>
                    <VoiceDot color={chain.color}/>
                    <Typography variant="body2">
                      <Link href={href} onClick={(event) => event.stopPropagation()}>{chain.name}</Link>
                    </Typography>
                    <Chip size="small" variant="outlined" label={chain.slug}/>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" color="text.secondary">{chain.tagline}</Typography>
                </TableCell>
                <TableCell align="right">{chain.steps.length}</TableCell>
                <TableCell>{chain.inMix ? 'Yes' : 'No'}</TableCell>
                <TableCell align="right">{chain.captions}</TableCell>
                <TableCell align="right">{chain.runs}</TableCell>
              </TableRow>
            );
          })}
          {chains.length === 0 && (
            <TableRow>
              <TableCell colSpan={6}>
                <Typography variant="body2" color="text.secondary">No chain yet.</Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <ChainDialog open={adding} chain={null} saving={saving} onClose={() => setAdding(false)} onSave={create}/>
    </Card>
  );
}
