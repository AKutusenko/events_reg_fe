import { Typography } from '@mui/material';

import { AppRoute } from '@/enums';

import { Card, ItemsGroup, LinksGroup, StyledLink } from './styles';

type Props = {
  id: string;
  title: string;
  description: string;
  eventDate: string;
  organizer: string;
};

export function EventCard({ id, title, description, eventDate, organizer }: Props): JSX.Element {
  return (
    <Card>
      <Typography variant="h5">{title}</Typography>

      <Typography variant="body2">{description}</Typography>

      <ItemsGroup>
        <Typography variant="body2" style={{ fontSize: '14px', fontWeight: '600' }}>
          Event date:
        </Typography>

        <Typography variant="body2" style={{ fontSize: '14px' }}>
          {eventDate}
        </Typography>
      </ItemsGroup>

      <ItemsGroup>
        <Typography variant="body2" style={{ fontSize: '14px', fontWeight: '600' }}>
          Organizer:
        </Typography>

        <Typography variant="body2" style={{ fontSize: '14px' }}>
          {organizer}
        </Typography>
      </ItemsGroup>

      <LinksGroup>
        <StyledLink href={`${AppRoute.REGISTER}/${id}`}>Register</StyledLink>

        <StyledLink href={`${AppRoute.PARTICIPANTS}/${id}`}>View</StyledLink>
      </LinksGroup>
    </Card>
  );
}
