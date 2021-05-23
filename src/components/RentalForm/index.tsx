import { useState, ChangeEventHandler, FormEventHandler } from 'react'
import styles from './index.module.css'

export interface FormData {
  title: string
  desc: string
  image: string
  price: number
}

interface FormProps {
  onSubmit: (data: FormData) => void
  initialData?: FormData
  edit?: boolean
  onDelete?: () => void
}

const INITIAL_DATA = {
  title: '',
  desc: '',
  image: '',
  price: 0
}

const RentalForm = ({
  onSubmit,
  edit,
  initialData = INITIAL_DATA,
  onDelete
}: FormProps): JSX.Element => {
  const [data, setData] = useState<FormData>(initialData)

  const handleSubmit: FormEventHandler = (event): void => {
    event.preventDefault()
    onSubmit(data)
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
    const fieldName = event.currentTarget.name
    const newValue = event.currentTarget.value
    setData(prev => ({
      ...prev,
      [fieldName]: newValue
    }))
  }

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <div className={styles.content}>
        <label>Title</label>
        <input
          name='title'
          value={data.title}
          onChange={handleChange}
          type='text'
        />
      </div>
      <div className={styles.content}>
        <label>description</label>
        <input
          name='desc'
          value={data.desc}
          onChange={handleChange}
          type='text'
        />
      </div>
      <div className={styles.content}>
        <label>Url image</label>
        <input
          name='image'
          value={data.image}
          onChange={handleChange}
          type='text'
        />
      </div>
      <div className={styles.content}>
        <label>price</label>
        <input
          name='price'
          value={data.price}
          onChange={handleChange}
          type='number'
        />
      </div>
      <div>
        <button className={styles.publishButton} type='submit'>
          Publish
        </button>
        {edit === true && <button onClick={onDelete} className={styles.deleteButton}>🗑</button>}
      </div>
    </form>
  )
}

export default RentalForm
