import { MdDelete } from "react-icons/md";
import { MdOutlineDragIndicator } from "react-icons/md";
import TextInput from "../../../components/TextInput/TextInput";
import Button from "../../../components/Button/Button";
import Flex from "../../../components/Flex/Flex";
import { SortableItem, SortableKnob } from "react-easy-sort";
import './PlayerNameItem.scss'

interface PlayerItemProps {
  name: string
  onNameChange: (str: string) => void
  onDeleteClick: () => void
}

const PlayerNameItem = ({ name, onNameChange, onDeleteClick }: PlayerItemProps) => (
  <SortableItem>
    <Flex gap='medium' isAlign className='player-name-item-container'>
      <SortableKnob>
        <MdOutlineDragIndicator className='knob-icon' />
      </SortableKnob>
      <TextInput value={name} onChange={onNameChange} />
      <Button icon={<MdDelete />} onClick={onDeleteClick} />
    </Flex>
  </SortableItem>
)

export default PlayerNameItem