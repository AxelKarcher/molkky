import type { GameState } from "../../types/gameState.type"

export const buildGameState = (names: string[]): GameState => ({
  players: names.map((name, idx) => ({
    score: 0,
    scoreHistory: [],
    errorsAmount: 0,
    name: name !== '' ? name : `Joueur ${idx + 1}`,
    winPosition: null,
    hasLost: false,
    average: 0
  })),
  currPlayerIdx: 0
})

export const calcAverage = (values: number[]): number => {
  const sum: number = values.reduce((acc, curr) => acc + curr)

  return Number((sum / values.length).toFixed(1).replace('.0', ''))
}

export const getTargetText = (score: number): string => {
  const target = 50 - score

  if (target > 12) {
    return '-'
  }

  return `${target.toString()} pts`
}

const COMMON_GAME_STATE_MOCK = {
  winPosition: null,
  score: 0,
  scoreHistory: [],
  errorsAmount: 0,
  average: 0,
  hasLost: false
}

export const GAME_STATE_MOCK: GameState = {
  players: [
    {
      name: 'A',
      ...COMMON_GAME_STATE_MOCK,
      winPosition: 1
    },
    {
      name: 'B',
      ...COMMON_GAME_STATE_MOCK
    },
    {
      name: 'C',
      ...COMMON_GAME_STATE_MOCK,
      hasLost: true
    },
    {
      name: 'D',
      ...COMMON_GAME_STATE_MOCK
    }
  ],
  currPlayerIdx: 1
}

export const determineNextPlayerIdx = (gameState: GameState): number => {
  const { players, currPlayerIdx } = gameState
  const playersAmount = players.length

  for (let i = 1; i <= playersAmount; i++) {
    const idx = (currPlayerIdx + i) % playersAmount
    const playerCheck = players[idx]

    if (!playerCheck.hasLost && playerCheck.winPosition === null) {
      return idx
    }
  }

  return -1
}