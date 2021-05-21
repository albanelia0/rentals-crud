import styles from './index.module.css'

const RentalForm = (): JSX.Element => {
  return (
    <form className={styles.wrapper}>
      <div className={styles.content}>
        <label>Title</label>
        <input type='text' />
      </div>
      <div className={styles.content}>
        <label>Url image</label>
        <input type='text' />
      </div>
      <div className={styles.content}>
        <label>price</label>
        <input type='text' />
      </div>
      <button> Publicate </button>
    </form>
  )
}

export default RentalForm
