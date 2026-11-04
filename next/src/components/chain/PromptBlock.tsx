import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// A prompt or a response as it reads, line breaks kept
export default function PromptBlock({label, text}: { label: string; text: string }) {
  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>{label}</Typography>
      <Typography
        variant="body2"
        component="pre"
        sx={{
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          fontFamily: 'inherit',
          bgcolor: 'action.hover',
          borderRadius: 1,
          p: 1.5,
          m: 0,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
