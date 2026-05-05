import type { CSSProperties, ReactNode } from 'react'
import './PageBase.scss'
import Flex from '../Flex/Flex'

interface PageBaseProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

const PageBase = ({ children, className, style }: PageBaseProps) => (
  <Flex isColumn className={`page-base-container ${className ?? ''}`} style={{ ...style }}>
    <div className='version-text'>{__APP_VERSION__}</div>
    {children}
  </Flex>
)

export default PageBase
