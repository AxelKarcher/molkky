import Button from "../../components/Button/Button"
import { IoAddSharp } from "react-icons/io5";
import PageBase from "../../components/PageBase/PageBase";
import './SettingsPage.scss'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Flex from "../../components/Flex/Flex";
import MolkkyImg from "../../components/MolkkyImg/MolkkyImg";
import SortableList from "react-easy-sort";
import { arrayMoveImmutable } from 'array-move'
import PlayerNameItem from "./PlayerNameItem/PlayerNameItem";

const DEBUG_NAMES = ['Axel', 'Dorian', 'Simon', 'Gwen', 'Mace', 'Antoine', 'Lucas', 'Nicolas', 'Guillaume', 'Justine', 'Julien']

const SettingsPage = () => {

  const navigate = useNavigate()

  const [names, setNames] = useState<string[]>([])

  const handleAddName = () => {
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
        <Flex isColumn isCenter isMinHeight isFlexStart isFullHeight>
          <MolkkyImg onClick={handleDebug} />
          <SortableList onSortEnd={onSortEnd} className='players-sortable-list'>
            <Flex isColumn className='card no-padding' isMinHeight isFullHeight>
              <Flex isColumn gap='small' className='scroll-area'>
                {names.map((name, key) => (
                  <PlayerNameItem
                    key={key}
                    name={name}
                    onNameChange={(v) => handleChangeName(key, v)}
                    onDeleteClick={() => handleDeleteName(key)}
                  />
                ))}
              </Flex>
            </Flex>
          </SortableList>
        </Flex>
        <Flex gap='medium'>
          <Button isFullWidth color='green' label='Commencer' onClick={handleStart} />
          <Button isFullWidth icon={<IoAddSharp />} onClick={handleAddName} />
        </Flex>
      </Flex>
    </PageBase>
  )
}

export default SettingsPage