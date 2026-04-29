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

  return (
    <PageBase className='settings-page-container'>
      <Flex isColumn isSpaceBetween isFullHeight>
        <Flex isColumn isCenter>
          <MolkkyImg />
          <Flex isColumn gap='medium'>
            {names.map((name, key) => (
              <Flex key={key} gap='medium'>
                <TextInput value={name} onChange={(v) => handleChangeName(key, v)} />
                <Button icon={<MdDelete />} onClick={() => handleDeleteName(key)} />
              </Flex>
            ))}
            <Flex isCenter>
              <Button icon={<IoAddSharp />} onClick={handleAddName} />
            </Flex>
          </Flex>
        </Flex>
        <Button color='green' label='Commencer' onClick={handleStart} />
      </Flex>
    </PageBase>
  )
}

export default SettingsPage