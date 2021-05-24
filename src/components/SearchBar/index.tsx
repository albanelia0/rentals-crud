import { useHistory } from 'react-router-dom'
import styles from './index.module.css'

interface SearchBarProps {
  onChange: (value: string) => void
}

const SearchBar = ({ onChange }: SearchBarProps): JSX.Element => {
  const history = useHistory()

  const handleOnClick = (): void => {
    history.push('/create')
  }

  return (
    <div className={styles.wrapper}>
      <button onClick={handleOnClick} className={styles.createButton}>+</button>
      <input onChange={e => onChange(e.currentTarget.value)} placeholder='Search by title' />
      <span>⫉</span>
    </div>
  )
}

export default SearchBar
