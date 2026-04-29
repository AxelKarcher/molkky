import Button from "../../../components/Button/Button"
import Flex from "../../../components/Flex/Flex"
import { ImCross } from 'react-icons/im';
import './ErrorsValidator.scss'

interface ErrorsValidatorProps {
  currErrorsAmount: number
  handleAddError: () => void
}

const ErrorsValidator = ({ currErrorsAmount, handleAddError }: ErrorsValidatorProps) => (
  <Flex isAlign isCenter className='errors-validator-container card' gap='small'>
    {Array(currErrorsAmount).fill('').map((_, key) => (
      <ImCross key={key} color='red' />
    ))}
    {currErrorsAmount < 3 && (
      <Button color='red' icon={<ImCross />} onClick={handleAddError} />
    )}
  </Flex>
)

export default ErrorsValidator