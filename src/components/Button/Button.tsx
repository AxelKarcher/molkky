import type { ReactNode } from 'react'
import './Button.scss'

interface ButtonProps {
  icon?: ReactNode;
  label?: string;
  onClick: () => void;
  className?: string;
  isFullWidth?: boolean;
  isDisabled?: boolean;
  color?: 'red' | 'green';
}

const Button = ({
  icon,
  label,
  onClick,
  color,
  isFullWidth,
  isDisabled,
  className
}: ButtonProps) => (
  <button
    className={`
      button-container
      ${label && 'labelled'}
      ${isFullWidth && 'full-width'}
      ${isDisabled && 'disabled'}
      ${isDisabled ? '' : 'bouncy'}
      ${className ?? ''}
    `}
    onClick={onClick}
    disabled={isDisabled}
    style={{ color: color, borderColor: color }}
  >
    {icon && icon}
    {label && label}
  </button>
)

export default Button