import { Participants } from '@/views';

type Props = {
  params: { id: string };
};

export default function Page({ params }: Props) {
  return <Participants eventId={params.id} />;
}
