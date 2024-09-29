'use client';

import { useState } from 'react';
import { Typography } from '@mui/material';

import { LoaderCircle, SVGIcon } from '@/components';
import { useGetEventByIdQuery } from '@/store/api';

import { ParticipantCard } from './components/participant-card';
import { IconWrapper, ParticipantsList, SearchField, Wrapper } from './styles';

type Props = {
  eventId: string;
};

export function Participants({ eventId }: Props): JSX.Element {
  const { data: event } = useGetEventByIdQuery(eventId);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const renderParticipants = () => {
    if (!event) return <LoaderCircle />;

    const filteredParticipants = event.participants.filter(
      ({ fullName, email }) =>
        fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <Wrapper>
        <Typography variant="h3">{`${event.title} participants`}</Typography>

        <SearchField
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <IconWrapper>
          <SVGIcon name="search" />
        </IconWrapper>

        <ParticipantsList>
          {filteredParticipants.map(({ id, fullName, email }) => (
            <ParticipantCard key={id} fullName={fullName} email={email} />
          ))}
        </ParticipantsList>
      </Wrapper>
    );
  };

  return renderParticipants();
}
