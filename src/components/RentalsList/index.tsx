import Card from '../Card'
import styles from './index.module.css'

interface RentalsListProps {
  searchQuery: string
  rentals: Array<{
    id: string
    title: string
    image: string
    price: number
    desc: string
  }>
}

const RentalsList = ({ searchQuery, rentals }: RentalsListProps): JSX.Element => {
  const lowerCaseSearchQuery = searchQuery.toLowerCase()

  return (
    <div className={styles.wrapper}>
      <section className={styles.rentals}>
        {rentals
          .filter(({ title }) => title.toLowerCase().includes(lowerCaseSearchQuery))
          .map(({ id, title, image, price, desc }) =>
            <Card
              key={id}
              id={id}
              title={title}
              image={image}
              price={price}
              desc={desc}
            />
          )}
      </section>
    </div>
  )
}

export default RentalsList
