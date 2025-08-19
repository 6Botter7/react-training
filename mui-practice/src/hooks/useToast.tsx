import { useState } from 'react';
import type { AlertColor } from '@mui/material/Alert';

interface ToastState {
  open: boolean;
  message: string;
  type: AlertColor;
}

export const useToast = () => {
  const [toast, setToast] = useState<ToastState>({
    open: false,
    message: '',
    type: 'info'
  });

  const showToastNotification = (message: string, type: AlertColor = 'info') => {
    setToast({
      open: true,
      message,
      type
    });
  };

  const hideToast = () => {
    setToast(prev => ({
      ...prev,
      open: false
    }));
  };

  return {
    toast,
    showToastNotification,
    hideToast
  };
};
