import { useEffect, useState } from 'react'
import RentalsList from '../../components/RentalsList'
import SearchBar from '../../components/SearchBar'

interface ApiListItem {
  id: number
  title: string
  image: string
  price: number
  desc: string
}

type ApiList = ApiListItem[]

const ListPage = (): JSX.Element => {
  const [rentals, setRentals] = useState<ApiList>([])

  useEffect(() => {
    window.fetch('http://localhost:3030/real-estate')
      .then(async res => await res.json())
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
