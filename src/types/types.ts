export type Player = {
  score: number;
  scoreHistory: number[],
  errorsAmount: number;
  name: string;
  wonPosition: number | null;
  average: number;
  hasLost: boolean;
}

export type GameState = {
  players: Player[];
  currPlayerIdx: number;
}