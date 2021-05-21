import styles from './index.module.css'

const SearchBar = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.createButton}>+</button>
      <input placeholder='Search' />
      <span>⫉</span>
    </div>
  )
}

export default SearchBar
