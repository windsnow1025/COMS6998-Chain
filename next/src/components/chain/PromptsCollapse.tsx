import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import PromptBlock from './PromptBlock';

// A step's 2 prompts, shown while the card's chevron (ExpandButton) holds them open
export default function PromptsCollapse({open, systemPrompt, userPrompt}: {
  open: boolean;
  systemPrompt: string;
  userPrompt: string;
}) {
  return (
    <Collapse in={open} unmountOnExit>
      <Box className="flex-column" sx={{gap: 1.5, mt: 1.5}}>
        <PromptBlock label="System prompt" text={systemPrompt}/>
        <PromptBlock label="User prompt" text={userPrompt}/>
      </Box>
    </Collapse>
  );
}
