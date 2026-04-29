import type { ReactNode } from 'react'
import './Button.scss'

interface ButtonProps {
  icon?: ReactNode;
  label?: string;
  onClick: () => void;
  className?: string;
  isGreen?: boolean;
  isRed?: boolean;
  isFullWidth?: boolean;
  isDisabled?: boolean;
}

const Button = ({ icon, label, onClick, isGreen, isRed, isFullWidth, isDisabled, className }: ButtonProps) => (
  <button
    className={`
      button-container
      ${label && 'labelled'}
      ${isGreen && 'green'}
      ${isRed && 'red'}
      ${isFullWidth && 'full-width'}
      ${isDisabled && 'disabled'}
      ${isDisabled ? '' : 'bouncy'}
      ${className ?? ''}
    `}
    onClick={onClick}
    disabled={isDisabled}
  >
    {icon && icon}
    {label && label}
  </button>
)

export default Button