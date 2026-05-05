import molkkyIcon from '../../assets/images/molkky.png'
import Flex from '../Flex/Flex'
import './MolkkyImg.scss'

interface MolkkyImgProps {
  onClick?: () => void
}

const MolkkyImg = ({ onClick }: MolkkyImgProps) => (
  <Flex isCenter onClick={onClick}>
    <img className='molkky-img-container' src={molkkyIcon} />
  </Flex>
)

export default MolkkyImg
