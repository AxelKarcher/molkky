import { useState } from 'react'
import PageBase from '../../components/PageBase/PageBase'
import { useLocation } from 'react-router-dom'
import Button from '../../components/Button/Button';
import { ImCross } from 'react-icons/im';
import { FaCheck } from 'react-icons/fa';
import './GamePage.scss'
import Flex from '../../components/Flex/Flex';
import NumericPad from './NumericPad/NumericPad';

type Player = {
  score: number;
  scoreHistory: number[],
  errorsAmount: number;
  name: string;
  wonPosition: number | null;
  average: number;
  hasLost: boolean;
}

type GameState = {
  players: Player[];
  currPlayerIdx: number;
}

const buildGameState = (names: string[]): GameState => ({
  players: names.map((name) => ({
    score: 0,
    scoreHistory: [],
    errorsAmount: 0,
    name,
    wonPosition: null,
    hasLost: false,
    average: 0
  })),
  currPlayerIdx: 0
})

const calcAverage = (values: number[]): number => {
  const sum: number = values.reduce((acc, curr) => acc + curr)

  return Number((sum / values.length).toFixed(1).replace('.0', ''))
}

const getTargetText = (score: number): string => {
  const target = 50 - score

  if (target > 12) {
    return '-'
  }

  return `${target.toString()} pts`
}

const GamePage = () => {

  const location = useLocation()
  const names: string[] = location.state

  const [typedScore, setTypedScore] = useState('')
  const [currWinPosition, setCurrWinPosition] = useState(1)
  const [gameState, setGameState] = useState<GameState>(() => {
    if (names?.length > 0) {
      return buildGameState(names)
    }

    return { players: [], currPlayerIdx: 0 }
  })

  const handleAddError = () => {
    const newGameState = { ...gameState }
    const currPlayer = newGameState.players[newGameState.currPlayerIdx]

    currPlayer.errorsAmount += 1

    if (currPlayer.errorsAmount === 3) {
      currPlayer.hasLost = true
    }

    setGameState(newGameState)
  }

  const goToNextPlayer = () => {
    setGameState((old) => {
      return {
        ...old,
        currPlayerIdx: (old.currPlayerIdx + 1) % old.players.length
      }
    })
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
      currPlayer.wonPosition = currWinPosition
      setCurrWinPosition((old) => old + 1)
    }

    setTypedScore('')
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

  const currPlayer = gameState.players[gameState.currPlayerIdx]

  return (
    <PageBase className='game-base-container'>
      <Flex isColumn gap='medium' isSpaceBetween isFullHeight>
        <Flex className='top-texts' isColumn isCenter>
          <span id='curr-name'>{currPlayer.name}</span>
          <span>Moyenne: {currPlayer.average}</span>
          <span>Target: {getTargetText(currPlayer.score)}</span>
        </Flex>
        <Flex isSpaceBetween>
          <Flex isCenter>
            {Array(currPlayer.errorsAmount).fill('').map((_, key) => (
              <ImCross key={key} color='red' />
            ))}
            {currPlayer.errorsAmount < 3 && (
              <Button isRed icon={<ImCross />} onClick={handleAddError} />
            )}
          </Flex>
          <Flex isColumn gap='medium'>
            <span id='curr-player-score'>{currPlayer.score}</span>
            <Flex gap='medium'>
              <span id='typed-score'>{typedScore}</span>
              <Button isGreen isDisabled={parseInt(typedScore) > 12} onClick={handleValidateScore} icon={<FaCheck  />} />
            </Flex>
          </Flex>
        </Flex>
        <Flex isSpaceBetween>
          <Flex isColumn gap='medium'>
            {gameState.players.map(({ name, score, errorsAmount }, key) => (
              <Flex key={key} gap='medium'>
                <span className={`little-name ${name === currPlayer.name && 'bold'}`}>{name}</span>
                <span>{score}</span>
                <span>
                  {Array(errorsAmount).fill('').map((_, key) => (
                    <ImCross key={key} color='red' />
                  ))}
                </span>
              </Flex>
            ))}
          </Flex>
          <NumericPad onPressed={(e) => handlePadPressed(e)} areNumbersDisabled={typedScore.length === 2} />
        </Flex>
      </Flex>
    </PageBase>
  )
}

export default GamePage