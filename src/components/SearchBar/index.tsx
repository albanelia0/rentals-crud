import { useHistory } from 'react-router-dom'
import styles from './index.module.css'

interface SearchBarProps {
  onChange: (value: string) => void
  value: string
}

const SearchBar = ({ onChange, value }: SearchBarProps): JSX.Element => {
  const history = useHistory()

  const handleCreateClick = (): void => {
    history.push('/create')
  }

  return (
    <div className={styles.wrapper}>
      <button onClick={handleCreateClick} className={styles.createButton}>+</button>
      <input
        onChange={e => onChange(e.currentTarget.value)}
        value={value}
        placeholder='Search by title'
        type='text'
      />
    </div>
  )
}

export default SearchBar
