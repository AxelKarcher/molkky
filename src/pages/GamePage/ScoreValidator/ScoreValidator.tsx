import Button from "../../../components/Button/Button"
import Flex from "../../../components/Flex/Flex"
import { FaCheck } from 'react-icons/fa';
import './ScoreValidator.scss'

interface ScoreValidatorProps {
  currScore: number
  typedScore: string
  handleValidateScore: () => void
  isDisabled: boolean
}

const ScoreValidator = ({ currScore, isDisabled, typedScore, handleValidateScore }: ScoreValidatorProps) => (
  <Flex className='score-validator-container card' gap='medium' isColumn>
    <span id='curr-player-score'>{currScore}</span>
    <Flex isSpaceAround gap='medium'>
      <span id='typed-score'>{`${typedScore !== '' ? '+ ' : ''}${typedScore}`}</span>
      <Button
        color='green'
        isDisabled={isDisabled || typedScore === '' || parseInt(typedScore) > 12}
        onClick={handleValidateScore}
        icon={<FaCheck />}
      />
    </Flex>
  </Flex>
)

export default ScoreValidator
