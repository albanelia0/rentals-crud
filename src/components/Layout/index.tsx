import { ReactNode } from 'react'
import styles from './index.module.css'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}

export default Layout
