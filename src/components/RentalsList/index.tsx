import Card from '../Card'
import styles from './index.module.css'

interface RentalsListProps {
  rentals: Array<{
    id: number
    title: string
    image: string
    price: number
    desc: string
  }>
}

const RentalsList = ({ rentals }: RentalsListProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.rentals}>
        {rentals.map(({ id, title, image, price, desc }) => (
          <Card
            key={id}
            id={id}
            title={title}
            image={image}
            price={price}
            desc={desc}
          />
        ))}
      </section>
    </div>
  )
}

export default RentalsList
