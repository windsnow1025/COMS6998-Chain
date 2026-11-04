import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import {AdminScreeningResDto} from '@/client/nest';
import ExpandButton from './ExpandButton';
import {HoverSx} from './HoverSx';
import PromptsCollapse from './PromptsCollapse';

// The product's own step before any chain, as the admin set it: read here, since every chain starts from its answer
export default function ScreeningCard({screening}: { screening: AdminScreeningResDto }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Card variant="outlined" sx={HoverSx}>
      <Box className="flex-between" sx={{p: 2, pb: 1, gap: 2}}>
        <Box sx={{flex: 1, minWidth: 0}}>
          <Typography variant="subtitle1">Screening</Typography>
          <Typography variant="body2" color="text.secondary">
            The product&apos;s own step before any chain: screens the photo and writes the description a chain reads as
            {' {description}'}. Its model and temperature are set in the admin.
          </Typography>
        </Box>
        <ExpandButton open={open} label="Prompts of the screening" onClick={() => setOpen(!open)}/>
      </Box>
      <Box sx={{p: 2, pt: 1}}>
        <Box className="flex-normal" sx={{gap: 1}}>
          <Chip size="small" color="primary" variant="outlined" label={screening.step}/>
          <Chip size="small" label="photo in"/>
          <Chip size="small" label="text out"/>
          <Chip size="small" label={`${screening.apiType} · ${screening.model}`}/>
          <Chip size="small" label={`temperature ${screening.temperature}`}/>
        </Box>
        <PromptsCollapse open={open} systemPrompt={screening.systemPrompt} userPrompt={screening.userPrompt}/>
      </Box>
    </Card>
  );
}
