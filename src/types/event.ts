import { Participant } from './participant';

export type Event = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  description: string;
  eventDate: string;
  organizer: string;
  participants: Participant[];
};
