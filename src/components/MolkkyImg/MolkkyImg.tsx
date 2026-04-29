import molkkyIcon from '../../assets/molkky.png'
import Flex from '../Flex/Flex'
import './MolkkyImg.scss'

const MolkkyImg = () => (
  <Flex isCenter>
    <img className='molkky-img-container' src={molkkyIcon} />
  </Flex>
)

export default MolkkyImg