import { useEffect, useState } from 'react'
import Card from '../Card'

const Rentals = () => {
  const [rental, setRentals] = useState([])

  useEffect(() => {
    window.fetch('http://localhost:3000/real-estate')
      .then(res => res.json())
      .then(res => setRentals(prev => [...prev, ...res]))
  }, [])

  console.log('rentals', rental)
  return (
    <div>
      <h2>rentals</h2>
      <Card art={rental} />
    </div>
  )
}

export default Rentals
