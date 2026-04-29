import type { CSSProperties, ReactNode } from "react"
import './Flex.scss'

type Gap = 'small' | 'medium' | 'large' | number

interface FlexProps {
  children: ReactNode,
  style?: CSSProperties,
  gap?: Gap,
  isCenter?: boolean,
  isColumn?: boolean,
  isSpaceBetween?: boolean,
  isSpaceAround?: boolean,
  isFullHeight?: boolean,
  className?: string
}

const GAP_VALUES = {
  small: 6,
  medium: 12,
  large: 24
}

const Flex = ({
  children,
  style,
  gap,
  isCenter,
  isColumn,
  isSpaceBetween,
  isSpaceAround,
  isFullHeight,
  className
}: FlexProps) => (
  <div
    className={`
      flex-container
      ${(isCenter && isColumn) && 'center-col'}
      ${(isCenter && !isColumn) && 'center-row'}
      ${isColumn && 'column'}
      ${isSpaceAround && 'space-around'}
      ${isSpaceBetween && 'space-between'}
      ${isFullHeight && 'full-height'}
      ${className ?? ''}
    `}
    style={{
      gap: gap !== undefined ? typeof gap === 'number' ? gap : GAP_VALUES[gap] : 0,
      ...style
    }}
  >
    {children}
  </div>
)

export default Flex