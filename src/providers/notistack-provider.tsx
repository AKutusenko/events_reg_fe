'use client';

import { SnackbarProvider } from 'notistack';

type Props = {
  children: React.ReactNode;
};

const SNACKBAR_DURATION = 3000;

const NotistackProvider = ({ children }: Props) => (
  <SnackbarProvider
    maxSnack={3}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    autoHideDuration={SNACKBAR_DURATION}
  >
    {children}
  </SnackbarProvider>
);

export { NotistackProvider };
