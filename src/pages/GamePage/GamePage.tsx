import { useState } from 'react'
import PageBase from '../../components/PageBase/PageBase'
import { Navigate, useLocation } from 'react-router-dom'
import './GamePage.scss'
import Flex from '../../components/Flex/Flex';
import NumericPad from './NumericPad/NumericPad';
import PlayersList from './PlayersList/PlayersList';
import ScoreValidator from './ScoreValidator/ScoreValidator';
import ErrorsValidator from './ErrorsValidator/ErrorsValidator';
import MolkkyImg from '../../components/MolkkyImg/MolkkyImg';
import type { GameState } from '../../types/gameState.type';
import { buildGameState, calcAverage, determineNextPlayerIdx, getTargetText } from './gamePage.utils';

const GamePage = () => {

  const location = useLocation()
  const names: string[] = location.state

  const [typedScore, setTypedScore] = useState('')
  const [currWinPosition, setCurrWinPosition] = useState(0)
  const [gameState, setGameState] = useState<GameState>(() => {
    if (names?.length > 0) {
      return buildGameState(names)
    }

    return { players: [], currPlayerIdx: 0 }
  })
  const [isGameOver, setIsGameOver] = useState(false)

  const goToNextPlayer = () => {
    const newIdx = determineNextPlayerIdx(gameState)

    if (newIdx === -1) {
      setIsGameOver(true)
      setGameState((old) => ({ ...old, currPlayerIdx: 0 }))
    } else {
      setGameState((old) => ({ ...old, currPlayerIdx: newIdx }))
    }

    setTypedScore('')
  }

  const handleAddError = () => {
    const newGameState = { ...gameState }
    const currPlayer = newGameState.players[newGameState.currPlayerIdx]

    currPlayer.errorsAmount += 1

    if (currPlayer.errorsAmount === 3) {
      currPlayer.hasLost = true
    }

    setGameState(newGameState)
    goToNextPlayer()
  }

  const handleValidateScore = () => {
    const newGameState = { ...gameState }
    const pointsToAdd = parseInt(typedScore)
    const currPlayer = newGameState.players[newGameState.currPlayerIdx]

    currPlayer.score += pointsToAdd
    currPlayer.scoreHistory.push(pointsToAdd)
    currPlayer.average = calcAverage(currPlayer.scoreHistory)

    if (currPlayer.score > 50) {
      currPlayer.score = 25
    } else if (currPlayer.score === 50) {
      currPlayer.winPosition = currWinPosition
      setCurrWinPosition((old) => old + 1)
    }

    setGameState(newGameState)

    goToNextPlayer()
  }

  const handlePadPressed = (nbChar: string) => {
    if (nbChar === 'erase') {
      setTypedScore(typedScore.slice(0, -1))
    } else {
      setTypedScore((old) => old + nbChar)
    }
  }

  if (gameState.players.length < 2) {
    return <Navigate to="/" replace />
  }

  const currPlayer = gameState.players[gameState.currPlayerIdx]

  return (
    <PageBase className='game-base-container'>
      <MolkkyImg />
      <Flex isColumn gap='medium' isSpaceBetween style={{ minHeight: 0}} isFullHeight>
        <Flex className='top-texts card' isColumn isCenter isAlign>
          <span id='curr-name'>{currPlayer.name}</span>
          <span>Moyenne: {currPlayer.average}</span>
          <span>Target: {getTargetText(currPlayer.score)}</span>
        </Flex>
        <PlayersList players={gameState.players} currName={currPlayer.name} />
        <Flex isSpaceBetween gap='medium'>
          <Flex isColumn isSpaceBetween isFullWidth gap='medium'>
            <ErrorsValidator
              currErrorsAmount={currPlayer.errorsAmount}
              handleAddError={handleAddError}
              isDisabled={isGameOver}
            />
            <ScoreValidator
              currScore={currPlayer.score}
              typedScore={typedScore}
              handleValidateScore={handleValidateScore}
              isDisabled={isGameOver}
            />
          </Flex>
          <NumericPad
            onPressed={(e) => handlePadPressed(e)}
            areNumbersDisabled={isGameOver || typedScore.length === 2}
          />
        </Flex>
      </Flex>
    </PageBase>
  )
}

export default GamePage