import { useHistory } from 'react-router-dom'

import RentalForm, { FormData } from '../../components/RentalForm'
import styles from './index.module.css'

const CreatePage = (): JSX.Element => {
  const history = useHistory()

  const handleSubmit = (data: FormData): void => {
    window
      .fetch('http://localhost:3030/real-estate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .then((): void => history.push('/'))
      .catch(console.error)
  }
  return (
    <div>
      <h3 className={styles.title}>Create rental</h3>
      <RentalForm onSubmit={handleSubmit} />
    </div>
  )
}

export default CreatePage
