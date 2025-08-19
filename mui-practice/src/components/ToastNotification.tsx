import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import type { SnackbarCloseReason } from '@mui/material/Snackbar';
import type { AlertColor } from '@mui/material/Alert';

interface ToastNotificationProps {
  message: string;
  type: AlertColor; // 'success' | 'error' | 'warning' | 'info'
  open: boolean;
  onClose: () => void;
  autoHideDuration?: number;
}

export default function ToastNotification({ 
  message, 
  type, 
  open, 
  onClose, 
  autoHideDuration = 2500
}: ToastNotificationProps) {
  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    onClose();
  };

  return (
    <Snackbar 
      open={open} 
      autoHideDuration={autoHideDuration} 
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert
        onClose={handleClose}
        severity={type}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
