import type { CSSProperties, ReactNode } from 'react'
import './Button.scss'

interface ButtonProps {
  icon?: ReactNode;
  label?: string;
  onClick: () => void;
  className?: string;
  isFullWidth?: boolean;
  isDisabled?: boolean;
  color?: 'red' | 'green';
  style?: CSSProperties
}

const Button = ({
  icon,
  label,
  onClick,
  color,
  isFullWidth,
  isDisabled,
  className,
  style
}: ButtonProps) => (
  <button
    className={`
      button-container
      ${label && 'labelled'}
      ${isFullWidth && 'full-width'}
      ${isDisabled && 'disabled'}
      ${isDisabled ? '' : 'bouncy'}
      ${icon ? 'with-icon' : ''}
      ${className ?? ''}
    `}
    onClick={onClick}
    disabled={isDisabled}
    style={{
      color: isDisabled ? 'grey': color,
      borderColor: isDisabled ? 'grey' : color,
      ...style
    }}
  >
    {icon && icon}
    {label && label}
  </button>
)

export default Button