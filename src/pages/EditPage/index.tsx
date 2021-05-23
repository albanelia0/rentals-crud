import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router'

import { deleteRentalById, fetchRentalById, updateRental } from '../../utils/api-client'
import RentalForm, { FormData } from '../../components/RentalForm'

const EditPage = (): JSX.Element => {
  const [initialData, setInitialData] = useState<FormData | null>(null)
  const { id } = useParams<{ id: string }>()

  const history = useHistory()

  useEffect(() => {
    fetchRentalById(id)
      .then(setInitialData)
      .catch(console.error)
  }, [id])

  const handleSubmit = (data: FormData): void => {
    updateRental(id, data)
      .then((): void => history.push('/'))
      .catch(console.error)
  }

  const handleDelete = (): void => {
    deleteRentalById(id)
      .then((): void => history.push('/'))
      .catch(console.error)
  }

  return (
    <div>
      {initialData === null
        ? null
        : <RentalForm onDelete={handleDelete} edit initialData={initialData} onSubmit={handleSubmit} />}
    </div>
  )
}

export default EditPage
