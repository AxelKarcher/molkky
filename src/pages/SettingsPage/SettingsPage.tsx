import Button from "../../components/Button/Button"
import { IoAddSharp } from "react-icons/io5";
import PageBase from "../../components/PageBase/PageBase";
import TextInput from "../../components/TextInput/TextInput";
import './SettingsPage.scss'
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Flex from "../../components/Flex/Flex";
import MolkkyImg from "../../components/MolkkyImg/MolkkyImg";
import SortableList, { SortableItem, SortableKnob } from "react-easy-sort";
import { arrayMoveImmutable } from 'array-move'
import { MdOutlineDragIndicator } from "react-icons/md";

const DEBUG_NAMES = ['Axel', 'Dorian', 'Simon', 'Gwen', 'Mace', 'Antoine', 'Lucas', 'Nicolas', 'Guillaume', 'Justine', 'Julien']

const SettingsPage = () => {

  const navigate = useNavigate()

  const [names, setNames] = useState<string[]>([])

  const handleAddName =() => {
    setNames((old) => [...old, ''])
  }

  const handleChangeName = (key: number, newValue: string) => {
    const newNames = [...names]

    newNames[key] = newValue

    setNames(newNames)
  }

  const handleDeleteName = (key: number) => {
    const newNames = [...names]

    newNames.splice(key, 1)

    setNames(newNames)
  }

  const handleStart = () => {
    navigate('/game', { state: names })
  }

  const handleDebug = () => {
    setNames(DEBUG_NAMES)
  }

  const onSortEnd = (oldIndex: number, newIndex: number) => {
    setNames((old) => arrayMoveImmutable(old, oldIndex, newIndex))
  }

  return (
    <PageBase className='settings-page-container'>
      <Flex isColumn gap='medium' isSpaceBetween isFullHeight>
        <Flex isColumn isCenter>
          <MolkkyImg onClick={handleDebug} />
          <Flex isColumn gap='medium'>
            <SortableList onSortEnd={onSortEnd}>
              <Flex isColumn gap='small'>
                {names.map((name, key) => (
                  <SortableItem key={key}>
                    <Flex gap='medium' isAlign>
                      <SortableKnob>
                        <MdOutlineDragIndicator />
                      </SortableKnob>
                      <TextInput value={name} onChange={(v) => handleChangeName(key, v)} />
                      <Button icon={<MdDelete />} onClick={() => handleDeleteName(key)} />
                    </Flex>
                  </SortableItem>
                ))}
              </Flex>
            </SortableList>
            <Button icon={<IoAddSharp />} onClick={handleAddName} />
          </Flex>
        </Flex>
        <Button color='green' label='Commencer' onClick={handleStart} />
      </Flex>
    </PageBase>
  )
}

export default SettingsPage