export type Player = {
  score: number;
  scoreHistory: number[],
  errorsAmount: number;
  name: string;
  winPosition: number | null;
  average: number;
  hasLost: boolean;
}