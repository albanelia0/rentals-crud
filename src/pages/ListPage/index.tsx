import { useEffect, useState } from 'react'
import { fetchRentals, ApiRental } from '../../utils/api-client'
import RentalsList from '../../components/RentalsList'
import SearchBar from '../../components/SearchBar'

const ListPage = (): JSX.Element => {
  const [rentals, setRentals] = useState<ApiRental[]>([])

  useEffect(() => {
    fetchRentals()
      .then(apiItems => setRentals(prev => [...prev, ...apiItems]))
      .catch(console.error)
  }, [])

  console.log('rentals', rentals)
  return (
    <div>
      <SearchBar />
      <RentalsList rentals={rentals} />
    </div>
  )
}

export default ListPage
