import Flex from "../../../components/Flex/Flex"
import type { Player } from "../../../types/types";
import './PlayersList.scss'
import { ImCross } from 'react-icons/im';

interface PlayersListProps {
  players: Player[]
  currName: string
}

const PlayersList = ({ players, currName }: PlayersListProps) => (
  <Flex isColumn gap='small' className='players-list-container card' isFullWidth>
    {players.map(({ name, score, errorsAmount }, key) => (
      <Flex
        key={key}
        className={`
          ${name === currName ? 'curr-name' : ''}
          ${errorsAmount === 3 ? 'lost' : ''}
        `}
        isAlign
        isSpaceBetween
      >
        <span>{name}</span>
        <span>{score}</span>
        <Flex gap='small'>
          {Array(errorsAmount).fill('').map((_, key) => (
            <ImCross key={key} className='list-cross' color='red' />
          ))}
        </Flex>
      </Flex>
    ))}
  </Flex>
)

export default PlayersList