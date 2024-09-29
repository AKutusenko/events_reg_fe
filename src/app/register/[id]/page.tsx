import { Register } from '@/views';

type Props = {
  params: { id: string };
};

export default function Page({ params }: Props) {
  return <Register eventId={params.id} />;
}
