import * as React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import {RunResDto, RunResDtoStatusEnum} from '@/client/nest';
import {formatInstant} from '@/lib/chain/Format';

// How a run's status reads in a chip
export function statusChip(status: RunResDtoStatusEnum): React.ReactElement {
  if (status === RunResDtoStatusEnum.Succeeded) {
    return <Chip size="small" color="success" label="succeeded"/>;
  }
  if (status === RunResDtoStatusEnum.Failed) {
    return <Chip size="small" color="error" label="failed"/>;
  }
  return <Chip size="small" color="primary" variant="outlined" label="running"/>;
}

// A run's answer: its captions, its text, or why it failed
export function RunAnswer({run}: { run: RunResDto }) {
  if (run.status === RunResDtoStatusEnum.Failed) {
    return <Typography variant="body2" color="error.main">{run.error}</Typography>;
  }
  if (run.captions) {
    return (
      <Box component="ul" sx={{m: 0, pl: 2.5}}>
        {run.captions.map((caption, index) => (
          <Typography key={index} component="li" variant="body1">{caption}</Typography>
        ))}
      </Box>
    );
  }
  if (run.text !== null) {
    return <Typography variant="body1" sx={{whiteSpace: 'pre-wrap'}}>{run.text}</Typography>;
  }
  return null;
}

// Where a run stands against the steps it makes
export function progressOf(run: RunResDto): string {
  if (run.status === RunResDtoStatusEnum.Running) {
    return `Step ${Math.min(run.calls.length + 1, run.stepCount)} of ${run.stepCount}`;
  }
  return `${run.calls.length} of ${run.stepCount} steps`;
}

// A run in progress or just finished: the photo, the steps done so far, and the answer, with the way to its page
export default function RunPanel({run, href}: { run: RunResDto; href: string }) {
  const running = run.status === RunResDtoStatusEnum.Running;
  return (
    <Box className="flex-column" sx={{gap: 1.5}}>
      <Box className="flex-normal" sx={{gap: 1.5}}>
        <Box
          component="img"
          src={run.photo.url}
          alt=""
          sx={{width: 96, height: 72, borderRadius: 1, objectFit: 'cover', bgcolor: 'action.hover', flexShrink: 0}}
        />
        <Box sx={{flex: 1, minWidth: 0}}>
          <Box className="flex-normal" sx={{gap: 1}}>
            {statusChip(run.status)}
            <Typography variant="body2" color="text.secondary">{progressOf(run)}</Typography>
            <Typography variant="body2" color="text.secondary">{formatInstant(run.createdAt)}</Typography>
            {running && <CircularProgress size={16}/>}
          </Box>
          <Box className="flex-normal" sx={{gap: 1, mt: 1}}>
            {run.calls.map((call) => (
              <Chip key={call.id} size="small" variant="outlined" label={`${call.step} · ${(call.durationMs / 1000).toFixed(1)}s`}/>
            ))}
          </Box>
        </Box>
      </Box>
      <RunAnswer run={run}/>
      <Typography variant="body2">
        <Link href={href}>Open the run</Link>
      </Typography>
    </Box>
  );
}
