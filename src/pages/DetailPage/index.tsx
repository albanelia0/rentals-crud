import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { fetchRentalById } from '../../utils/api-client'

import styles from './index.module.css'

export interface FormData {
  title: string
  desc: string
  image: string
  price: number
}

const DetailPage = (): JSX.Element => {
  const [dt, setData] = useState<FormData | null>(null)
  // const { image, title, desc, price } = data
  const { id } = useParams<{ id: string }>()

  useEffect(
    () => {
      fetchRentalById(id).then(setData).catch(console.error)
    },
    [id]
  )
  return (
    <main>
      <img className={styles.image} src={dt?.image} alt='rental' />
      <div className={styles.content}>
        <span className={styles.title}>{dt?.title}</span>
        <div className={styles.contentDesc}>
          <label>
            Description:
          </label>
          <span>{dt?.desc}</span>
        </div>
        <span>Price: {dt?.price}€</span>
      </div>
    </main>
  )
}

export default DetailPage
