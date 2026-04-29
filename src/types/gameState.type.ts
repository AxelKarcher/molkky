import type { Player } from "./player.type";

export type GameState = {
  players: Player[];
  currPlayerIdx: number;
}