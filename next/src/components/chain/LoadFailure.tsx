import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// A load that failed, in the place of what it would have shown, with the way to try again
export default function LoadFailure({message, onRetry, minHeight = '50vh'}: {
  message: string;
  onRetry: () => void;
  minHeight?: number | string;
}) {
  return (
    <Box className="flex-center" sx={{minHeight, flexDirection: 'column', gap: 1.5, p: 2, textAlign: 'center'}}>
      <Typography variant="body2" color="error.main">{message}</Typography>
      <Button variant="outlined" onClick={onRetry}>Try again</Button>
    </Box>
  );
}
