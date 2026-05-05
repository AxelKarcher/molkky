import type { GameState } from "../types/gameState.type";

const STORAGE_KEY = 'gameState'

export const updateStoredGame = (gameState: GameState) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState))
}

export const deleteStoredGame = () => {
  localStorage.removeItem(STORAGE_KEY)
}

export const getStoredGame = (): GameState => {
  const data = localStorage.getItem(STORAGE_KEY)

  if (!data) {
    return { players: [], currPlayerIdx: -1 }
  }
  return JSON.parse(data)
}

export const isGameStored = (): boolean => {
  return localStorage.getItem(STORAGE_KEY) !== null
}
