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
  edit = false,
  initialData = INITIAL_DATA,
  onDelete
}: FormProps): JSX.Element => {
  const [data, setData] = useState<FormData>(initialData)

  const handleSubmit: FormEventHandler = (event): void => {
    event.preventDefault()
    onSubmit({ ...data, price: Number(data.price) })
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
        <label htmlFor='RentalForm-title'>Title</label>
        <input
          id='RentalForm-title'
          name='title'
          value={data.title}
          onChange={handleChange}
          type='text'
        />
      </div>
      <div className={styles.content}>
        <label htmlFor='RentalForm-desc'>Description</label>
        <input
          id='RentalForm-desc'
          name='desc'
          value={data.desc}
          onChange={handleChange}
          type='text'
        />
      </div>
      <div className={styles.content}>
        <label htmlFor='RentalForm-image'>Image URL</label>
        <input
          id='RentalForm-image'
          name='image'
          value={data.image}
          onChange={handleChange}
          type='text'
        />
      </div>
      <div className={styles.content}>
        <label htmlFor='RentalForm-price'>Price</label>
        <input
          id='RentalForm-price'
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
        {edit && (
          <button onClick={onDelete} className={styles.deleteButton} aria-label='Delete'>
            <span aria-hidden='true'>🗑</span>
          </button>
        )}
      </div>
    </form>
  )
}

export default RentalForm
