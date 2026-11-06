import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import {AdminPipelineStepResDto} from '@/client/nest';
import {SharedSteps} from '@/lib/chain/Rules';
import ExpandButton from './ExpandButton';
import {HoverSx} from './HoverSx';
import PromptsCollapse from './PromptsCollapse';

// The step every chain starts with, as the admin set it: the product writes a photo's description once, so a chain
// reads it here and neither changes it nor makes its request again
export default function SharedStepCard({step}: { step: AdminPipelineStepResDto }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Card variant="outlined" sx={{...HoverSx, p: 2}}>
      <Box className="flex-between" sx={{gap: 1}}>
        <Box className="flex-normal" sx={{gap: 1, flex: 1, minWidth: 0}}>
          <Chip size="small" color="primary" variant="outlined" label={`Step ${SharedSteps}: ${step.step}`}/>
          <Chip size="small" label="photo in"/>
          <Chip size="small" label="text out"/>
          <Chip size="small" label={`${step.apiType} · ${step.model}`}/>
          <Chip size="small" variant="outlined" label="shared by every chain"/>
        </Box>
        <ExpandButton open={open} label={`Prompts of step ${SharedSteps}`} onClick={() => setOpen(!open)}/>
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{mt: 1}}>
        Describes a photo once, when it is uploaded, and the photo keeps the description: every chain reads the same
        one as {'{description}'}. Its model is set in the admin.
      </Typography>
      <PromptsCollapse open={open} systemPrompt={step.systemPrompt} userPrompt={step.userPrompt}/>
    </Card>
  );
}
