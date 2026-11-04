import * as React from 'react';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

// A chevron that opens and closes a step's prompts, turned up while they are open
export default function ExpandButton({open, label, disabled, onClick}: {
  open: boolean;
  label: string;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <Tooltip title={open ? 'Hide the prompts' : 'Show the prompts'}>
      <span>
        <IconButton
          size="small"
          aria-label={label}
          aria-expanded={open}
          disabled={disabled}
          onClick={onClick}
          sx={{transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s'}}
        >
          <ExpandMoreRoundedIcon fontSize="small"/>
        </IconButton>
      </span>
    </Tooltip>
  );
}
