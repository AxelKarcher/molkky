import type { ReactNode } from 'react'
import './PageBase.scss'

interface PageBaseProps {
  children: ReactNode;
  className?: string;
}

const PageBase = ({ children, className }: PageBaseProps) => (
  <div className={`page-base-container ${className ?? ''}`}>
    {children}
  </div>
)

export default PageBase