import { Typography } from '@mui/material';

import { Card } from './styles';

type Props = {
  fullName: string;
  email: string;
};

export function ParticipantCard({ fullName, email }: Props): JSX.Element {
  return (
    <Card>
      <Typography variant="h5">{fullName}</Typography>

      <Typography variant="body2">{email}</Typography>
    </Card>
  );
}
