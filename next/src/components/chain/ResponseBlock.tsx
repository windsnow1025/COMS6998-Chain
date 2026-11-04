import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import PromptBlock from './PromptBlock';

// What a step's structured response carries: its captions or its text
interface ParsedResponse {
  captions?: string[];
  text?: string;
}

function parse(response: string): ParsedResponse | null {
  try {
    const parsed: unknown = JSON.parse(response);
    if (parsed && typeof parsed === 'object') {
      const record = parsed as Record<string, unknown>;
      if (Array.isArray(record.captions) && record.captions.every((caption) => typeof caption === 'string')) {
        return {captions: record.captions as string[]};
      }
      if (typeof record.text === 'string') {
        return {text: record.text};
      }
    }
  } catch {
    // Not JSON
  }
  return null;
}

// A step's response as it reads, with the JSON the model answered behind a button; a response of another form shows as it is
export default function ResponseBlock({response}: { response: string }) {
  const [raw, setRaw] = React.useState(false);
  const parsed = parse(response);
  if (!parsed) {
    return <PromptBlock label="Response" text={response}/>;
  }
  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>Response</Typography>
      <Box sx={{bgcolor: 'action.hover', borderRadius: 1, p: 1.5}}>
        {parsed.captions ? (
          <Box component="ul" sx={{m: 0, pl: 2.5}}>
            {parsed.captions.map((caption, index) => (
              <Typography key={index} component="li" variant="body2">{caption}</Typography>
            ))}
          </Box>
        ) : (
          <Typography variant="body2" sx={{whiteSpace: 'pre-wrap', wordBreak: 'break-word'}}>{parsed.text}</Typography>
        )}
      </Box>
      <Button size="small" onClick={() => setRaw(!raw)} aria-expanded={raw} sx={{mt: 0.5}}>
        {raw ? 'Hide the raw response' : 'Show the raw response'}
      </Button>
      <Collapse in={raw} unmountOnExit>
        <Box sx={{mt: 0.5}}>
          <PromptBlock label="Raw response" text={response}/>
        </Box>
      </Collapse>
    </Box>
  );
}
