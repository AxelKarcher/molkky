import type { CSSProperties, ReactNode } from "react"
import './Flex.scss'
import React from "react"

type Gap = 'small' | 'medium' | 'large' | number

interface FlexProps {
  children: ReactNode,
  style?: CSSProperties,
  gap?: Gap,
  isCenter?: boolean,
  isAlign?: boolean,
  isColumn?: boolean,
  isSpaceBetween?: boolean,
  isSpaceAround?: boolean,
  isFullHeight?: boolean,
  isFullWidth?: boolean,
  isFlexStart?: boolean,
  className?: string,
  isMinHeight?: boolean,
  onClick?: () => void
}

const GAP_VALUES = {
  small: 6,
  medium: 12,
  large: 24
}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      children,
      style,
      gap,
      isCenter,
      isAlign,
      isColumn,
      isSpaceBetween,
      isSpaceAround,
      isFullHeight,
      isFullWidth,
      className,
      isFlexStart,
      isMinHeight,
      onClick
    },
    ref
  ) => (
    <div
      ref={ref}
      className={`
        flex-container
        ${isCenter && 'center'}
        ${isAlign && 'align'}
        ${isColumn && 'column'}
        ${isSpaceAround && 'space-around'}
        ${isSpaceBetween && 'space-between'}
        ${isFullHeight && 'full-height'}
        ${isFullWidth && 'full-width'}
        ${isMinHeight && 'min-height'}
        ${isFlexStart && 'flex-start'}
        ${className ?? ''}
      `}
      style={{
        gap: gap !== undefined ? typeof gap === 'number' ? gap : GAP_VALUES[gap] : 0,
        ...style
      }}
      onClick={onClick}
    >
      {children}
    </div>
  )
)

export default Flex
