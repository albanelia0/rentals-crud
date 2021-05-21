import { useHistory } from 'react-router-dom'
import styles from './index.module.css'

const SearchBar = (): JSX.Element => {
  const history = useHistory()

  const handleOnClick = (): void => {
    history.push('/create')
  }
  return (
    <div className={styles.wrapper}>
      <button onClick={handleOnClick} className={styles.createButton}>+</button>
      <input placeholder='Search' />
      <span>⫉</span>
    </div>
  )
}

export default SearchBar
