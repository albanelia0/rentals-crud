import { useHistory } from 'react-router-dom'

import styles from './index.module.css'

const Header = (): JSX.Element => {
  const history = useHistory()
  const handleLogoClick = (): void => history.push('/')

  return (
    <header className={styles.header}>
      <h2 onClick={handleLogoClick} className={styles.logo}>Rentals</h2>
    </header>
  )
}

export default Header
