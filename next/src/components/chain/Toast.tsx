import * as React from 'react';
import Alert, {AlertColor} from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

interface Toast {
  show: (message: string, severity?: AlertColor) => void;
}

const ToastContext = React.createContext<Toast>({show: () => undefined});

export function useToast(): Toast {
  return React.useContext(ToastContext);
}

export function ToastProvider({children}: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [severity, setSeverity] = React.useState<AlertColor>('info');

  const toast = React.useMemo<Toast>(() => ({
    show: (message, severity = 'info') => {
      setMessage(message);
      setSeverity(severity);
      setOpen(true);
    },
  }), []);

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert onClose={() => setOpen(false)} severity={severity} sx={{width: '100%'}}>
          {message}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
}
