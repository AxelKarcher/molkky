import type { ReactNode } from 'react';
import './ModalBase.scss'
import Flex from '../Flex/Flex';
import { IoClose } from "react-icons/io5";

interface ModalBaseProps {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

const ModalBase = ({ title, children, isOpen, handleClose }: ModalBaseProps) => {

  if (!isOpen) {
    return <></>
  }

  return (
    <Flex isColumn isAlign isCenter className='modal-base-container'>
      <Flex isColumn className='modal-body card' gap='large'>
        <IoClose className='modal-close-icon' onClick={handleClose} />
        <span>{title}</span>
        {children}
      </Flex>
    </Flex>
  )
}

export default ModalBase