import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import {ChainResDto} from '@/client/nest';

export interface ChainValues {
  slug: string;
  name: string;
  tagline: string;
  color: string;
}

const DefaultColor = '#64748b';
const SlugPattern = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const SlugRule = 'Lower-case letters, digits, and hyphens';

// The slug a name suggests: lower-case words joined by hyphens
export function slugOf(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 32);
}

// The form, mounted while the dialog is open so that it starts from the chain each time
function ChainForm({chain, saving, onClose, onSave}: {
  chain: ChainResDto | null;
  saving: boolean;
  onClose: () => void;
  onSave: (values: ChainValues) => void;
}) {
  const [values, setValues] = React.useState<ChainValues>(() => (chain
    ? {slug: chain.slug, name: chain.name, tagline: chain.tagline, color: chain.color}
    : {slug: '', name: '', tagline: '', color: DefaultColor}));
  // Whether the slug follows the name, until it is typed
  const [slugFollows, setSlugFollows] = React.useState(chain === null);

  const slugValid = SlugPattern.test(values.slug);
  const complete = values.name.trim() !== '' && values.tagline.trim() !== '' && slugValid;

  return (
    <>
      <DialogTitle>{chain ? 'Edit chain' : 'Add chain'}</DialogTitle>
      <DialogContent>
        <Box className="flex-column" sx={{gap: 2, pt: 1}}>
          <TextField
            label="Name"
            value={values.name}
            onChange={(event) => {
              const name = event.target.value;
              setValues((current) => ({...current, name, slug: slugFollows ? slugOf(name) : current.slug}));
            }}
            required
            fullWidth
            slotProps={{htmlInput: {maxLength: 64}}}
            helperText="The voice's name, as the product shows it"
          />
          <TextField
            label="Slug"
            value={values.slug}
            onChange={(event) => {
              setSlugFollows(false);
              setValues((current) => ({...current, slug: event.target.value}));
            }}
            required
            disabled={chain !== null}
            error={chain === null && values.slug !== '' && !slugValid}
            fullWidth
            slotProps={{htmlInput: {maxLength: 32}}}
            helperText={chain ? 'Set at creation' : SlugRule}
          />
          <TextField
            label="Tagline"
            value={values.tagline}
            onChange={(event) => setValues((current) => ({...current, tagline: event.target.value}))}
            required
            fullWidth
            slotProps={{htmlInput: {maxLength: 160}}}
            helperText="One line on how the voice writes, shown with its name"
          />
          <TextField
            label="Color"
            type="color"
            value={values.color}
            onChange={(event) => setValues((current) => ({...current, color: event.target.value}))}
            sx={{width: 240}}
            helperText="The voice's color in the product"
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={saving}>Cancel</Button>
        <Button
          variant="contained"
          onClick={() => onSave({...values, name: values.name.trim(), tagline: values.tagline.trim()})}
          disabled={saving || !complete}
        >
          {saving ? 'Saving…' : 'Save'}
        </Button>
      </DialogActions>
    </>
  );
}

// A chain's own fields; the slug is set at creation and shown disabled afterwards
export default function ChainDialog({open, chain, saving, onClose, onSave}: {
  open: boolean;
  // The chain edited; null for a new one
  chain: ChainResDto | null;
  saving: boolean;
  onClose: () => void;
  onSave: (values: ChainValues) => void;
}) {
  return (
    <Dialog open={open} onClose={saving ? undefined : onClose} fullWidth maxWidth="sm">
      {open && <ChainForm chain={chain} saving={saving} onClose={onClose} onSave={onSave}/>}
    </Dialog>
  );
}
