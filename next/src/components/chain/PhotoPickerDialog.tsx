import * as React from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputAdornment from '@mui/material/InputAdornment';
import TablePagination from '@mui/material/TablePagination';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {AdminPhotoPageResDto, AdminPhotoResDto} from '@/client/nest';
import ChainClient from '@/lib/chain/ChainClient';
import {truncate} from '@/lib/chain/Format';
import {useToast} from './Toast';

const PhotosPerPage = 12;
const SearchDelayMs = 300;

// A photo of the library, chosen to run a chain on: a searchable, paged grid of thumbnails
export default function PhotoPickerDialog({open, onClose, onPick}: {
  open: boolean;
  onClose: () => void;
  onPick: (photo: AdminPhotoResDto) => void;
}) {
  const toast = useToast();
  const [query, setQuery] = React.useState('');
  const [search, setSearch] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [result, setResult] = React.useState<AdminPhotoPageResDto | null>(null);

  // The search follows the typing after a pause; Enter applies it at once
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setPage(0);
      setSearch(query.trim());
    }, SearchDelayMs);
    return () => clearTimeout(timer);
  }, [query]);

  React.useEffect(() => {
    if (!open) {
      return;
    }
    let active = true;
    const load = async () => {
      try {
        const fetched = await new ChainClient().fetchPhotos(PhotosPerPage, page * PhotosPerPage, search || undefined);
        if (active) {
          setResult(fetched);
        }
      } catch (error) {
        toast.show((error as Error).message, 'error');
      }
    };
    load();
    return () => {
      active = false;
    };
    // toast is stable
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, page, search]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Pick a photo</DialogTitle>
      <DialogContent>
        <Box className="flex-column" sx={{gap: 2, pt: 1}}>
          <TextField
            size="small"
            placeholder="Search descriptions, places, captions"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                setPage(0);
                setSearch(query.trim());
              }
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRoundedIcon fontSize="small"/>
                  </InputAdornment>
                ),
              },
            }}
          />
          {!result ? (
            <Box className="flex-center" sx={{minHeight: 240}}>
              <CircularProgress/>
            </Box>
          ) : result.photos.length === 0 ? (
            <Typography variant="body2" color="text.secondary" sx={{minHeight: 240}}>
              No photo matches.
            </Typography>
          ) : (
            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 1.5}}>
              {result.photos.map((photo) => (
                <ButtonBase
                  key={photo.id}
                  onClick={() => onPick(photo)}
                  sx={{
                    display: 'block',
                    textAlign: 'left',
                    borderRadius: 1,
                    overflow: 'hidden',
                    border: 1,
                    borderColor: 'divider',
                    transition: 'border-color 0.2s',
                    '&:hover': {borderColor: 'text.primary'},
                  }}
                >
                  <Box
                    component="img"
                    src={photo.url}
                    alt=""
                    sx={{display: 'block', width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', bgcolor: 'action.hover'}}
                  />
                  <Typography variant="caption" color="text.secondary" component="div" sx={{p: 1}}>
                    {truncate(photo.description, 60)}
                  </Typography>
                </ButtonBase>
              ))}
            </Box>
          )}
          {result && result.total > PhotosPerPage && (
            <TablePagination
              component="div"
              count={result.total}
              page={page}
              onPageChange={(_event, next) => setPage(next)}
              rowsPerPage={PhotosPerPage}
              rowsPerPageOptions={[PhotosPerPage]}
            />
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
