import Flex from "../../../components/Flex/Flex"
import type { Player } from "../../../types/player.type";
import './PlayersList.scss'
import { ImCross } from 'react-icons/im';

interface PlayersListProps {
  players: Player[]
  currName: string
}

const POSITIONS_TABLE = ['1er', '2ème', '3ème']

const PlayersList = ({ players, currName }: PlayersListProps) => (
  <Flex isColumn gap='small' className='players-list-container card' isFullWidth>
    {players.map(({ name, score, errorsAmount, hasLost, winPosition }, key) => (
      <Flex
        key={key}
        className={`grid-row ${name === currName ? 'curr-name' : ''} ${hasLost ? 'lost' : ''}`}
        isAlign
        isSpaceBetween
      >
        <Flex>{name}</Flex>
        <Flex isCenter>{winPosition !== null ? POSITIONS_TABLE[winPosition] : score}</Flex>
        <Flex gap='small' style={{ justifyContent: 'flex-end' }}>
          {Array(errorsAmount).fill('').map((_, key) => (
            <ImCross key={key} className='list-cross' color='red' />
          ))}
        </Flex>
      </Flex>
    ))}
  </Flex>
)

export default PlayersList