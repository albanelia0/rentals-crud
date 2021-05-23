import styles from './index.module.css'
import { ReactComponent as Pencil } from './icons/pencil.svg'
import { useHistory } from 'react-router-dom'
interface CardProps {
  id: string
  title: string
  image: string
  price: number
  desc: string
}

const Card = ({ id, image, title, price, desc }: CardProps): JSX.Element => {
  const history = useHistory()

  const handleEdit = (): void => {
    history.push(`/edit/${id}`)
  }
  const handleDetail = (): void => {
    history.push(`/detail/${id}`)
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentImg}>
        <img onClick={handleDetail} alt='article' src={image} />
        <span onClick={handleEdit} className={styles.pencil}><Pencil /></span>
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{desc}</div>
      <div><strong>{price} €</strong> / night</div>
    </div>
  )
}

export default Card
