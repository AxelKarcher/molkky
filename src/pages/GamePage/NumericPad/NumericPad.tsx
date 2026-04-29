import Button from "../../../components/Button/Button"
import Flex from "../../../components/Flex/Flex"
import { FaDeleteLeft } from "react-icons/fa6";

interface NumericPadProps {
  onPressed: (nbChar: string) => void
  areNumbersDisabled: boolean
}

const NumericPad = ({ onPressed, areNumbersDisabled }: NumericPadProps) => (
  <Flex isColumn gap='small'>
    <Flex gap='small'>
      {['1', '2', '3'].map((nb, key) => (
        <Button key={key} isDisabled={areNumbersDisabled} label={nb.toString()} onClick={() => onPressed(nb)} />
      ))}
    </Flex>
    <Flex gap='small'>
      {['4', '5', '6'].map((nb, key) => (
        <Button key={key} isDisabled={areNumbersDisabled} label={nb.toString()} onClick={() => onPressed(nb)} />
      ))}
    </Flex>
    <Flex gap='small'>
      {['7', '8', '9'].map((nb, key) => (
        <Button key={key} isDisabled={areNumbersDisabled} label={nb.toString()} onClick={() => onPressed(nb)} />
      ))}
    </Flex>
    <Flex gap='small'>
      <Button isFullWidth isDisabled={areNumbersDisabled} label='0' onClick={() => onPressed('0')} />
      <Button isFullWidth icon={<FaDeleteLeft />} onClick={() => onPressed('erase')} />
    </Flex>
  </Flex>
)

export default NumericPad