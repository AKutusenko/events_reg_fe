import { Stack, StackProps, Typography } from '@mui/material';

interface BlockProps extends StackProps {
  label?: string;
  children: React.ReactNode;
  mb?: string;
}

export function Block({ label = '', mb = '0', sx, children }: BlockProps): JSX.Element {
  return (
    <Stack height="85px" sx={{ width: 1, marginBottom: mb, ...sx }}>
      <Typography
        variant="body1"
        sx={{
          textAlign: 'left',
          marginBottom: '10px',
        }}
      >
        {label}
      </Typography>

      {children}
    </Stack>
  );
}
