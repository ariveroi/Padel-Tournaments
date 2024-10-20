export type TournamentType = {
  id: string;
  name: string;
  participants: ParticipantType[];
};

export type ParticipantType = {
  id: string;
  name: string;
};
