import { useHistory } from 'react-router-dom'

import { createRental } from '../../utils/api-client'
import RentalForm, { FormData } from '../../components/RentalForm'
import styles from './index.module.css'

const CreatePage = (): JSX.Element => {
  const history = useHistory()

  const handleSubmit = (data: FormData): void => {
    createRental(data)
      .then((): void => history.push('/'))
      .catch(console.error)
  }
  return (
    <main>
      <h3 className={styles.title}>Create rental</h3>
      <RentalForm onSubmit={handleSubmit} />
    </main>
  )
}

export default CreatePage
