'use client';

import { Wrapper } from './styles';
import { Form } from './components';

type Props = {
  eventId: string;
};

export function Register({ eventId }: Props): JSX.Element {
  const renderRegister = () => (
    <Wrapper>
      <Form eventId={eventId} />
    </Wrapper>
  );

  return renderRegister();
}
