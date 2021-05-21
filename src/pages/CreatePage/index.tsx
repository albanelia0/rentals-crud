import RentalForm from '../../components/RentalForm'
import styles from './index.module.css'

const CreatePage = (): JSX.Element => {
  return (
    <div>
      <h3 className={styles.title}>Create rental</h3>
      <RentalForm />
    </div>
  )
}

export default CreatePage
