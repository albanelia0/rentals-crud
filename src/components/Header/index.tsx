import { useHistory } from 'react-router-dom'

import styles from './index.module.css'

const Header = (): JSX.Element => {
  const history = useHistory()

  const onClickLogo = (): void => history.push('/')
  return (
    <header onClick={onClickLogo} className={styles.header}>
      <h2 className={styles.title}>Rentals</h2>
    </header>
  )
}

export default Header
