import styles from './index.module.css'

interface CardProps {
  id: number
  title: string
  image: string
  price: number
  desc: string
}

const Card = ({ id, image, title, price, desc }: CardProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <img alt='article' src={image} />
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{desc}</div>
      <div><strong>{price} €</strong> / night</div>
    </div>
  )
}

export default Card
