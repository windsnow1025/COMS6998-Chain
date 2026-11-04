import * as React from 'react';
import Box from '@mui/material/Box';

// A voice's color, as the product shows it
export default function VoiceDot({color}: { color: string }) {
  return <Box sx={{width: 10, height: 10, borderRadius: '50%', bgcolor: color, flexShrink: 0}}/>;
}
