import { useEffect, useState } from 'react'
import { fetchRentals, ApiRental } from '../../utils/api-client'
import RentalsList from '../../components/RentalsList'
import SearchBar from '../../components/SearchBar'

const ListPage = (): JSX.Element => {
  const [rentals, setRentals] = useState<ApiRental[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')

  useEffect(() => {
    fetchRentals()
      .then(apiItems => setRentals(prev => [...prev, ...apiItems]))
      .catch(console.error)
  }, [])

  const handleSearchChange = (value: string): void => setSearchQuery(value)

  return (
    <main>
      <SearchBar onChange={handleSearchChange} value={searchQuery} />
      <RentalsList rentals={rentals} searchQuery={searchQuery} />
    </main>
  )
}

export default ListPage
