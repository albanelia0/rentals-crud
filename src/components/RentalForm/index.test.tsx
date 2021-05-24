import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RentalForm from '.'

const FAKE_DATA = {
  title: 'Entire flat',
  desc: '2 bedroom',
  image: 'https://www.aproperties.es/thumb?src=/media/properties/28851/28851_16206456867376.jpg&w=640&h=480',
  price: 90
}

describe('RentalForm', () => {
  test('should display all fields empty', () => {
    render(<RentalForm onSubmit={() => {}} />)
    expect(screen.getByLabelText('Title')).toHaveValue('')
    expect(screen.getByLabelText('Description')).toHaveValue('')
    expect(screen.getByLabelText('Image URL')).toHaveValue('')
    expect(screen.getByLabelText('Price')).toHaveValue(0)
  })

  test('should display all fields with initialData values', () => {
    render(<RentalForm onSubmit={() => {}} initialData={FAKE_DATA} />)
    expect(screen.getByLabelText('Title')).toHaveValue(FAKE_DATA.title)
    expect(screen.getByLabelText('Description')).toHaveValue(FAKE_DATA.desc)
    expect(screen.getByLabelText('Image URL')).toHaveValue(FAKE_DATA.image)
    expect(screen.getByLabelText('Price')).toHaveValue(FAKE_DATA.price)
  })

  test('should display a submit button', () => {
    render(<RentalForm onSubmit={() => {}} />)
    expect(screen.getByRole('button', { name: 'Publish' })).toBeInTheDocument()
  })

  test('should not display delete button', () => {
    render(<RentalForm onSubmit={() => {}} />)
    expect(screen.queryByRole('button', { name: 'Delete' })).not.toBeInTheDocument()
  })

  test('should display delete button in edit mode', () => {
    render(<RentalForm onSubmit={() => {}} edit />)
    expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument()
  })

  test('should delete rental when delete button is clicked', () => {
    const handleDelete = jest.fn()
    render(<RentalForm onSubmit={() => {}} edit onDelete={handleDelete} />)
    const deleteButton = screen.getByRole('button', { name: 'Delete' })
    userEvent.click(deleteButton)
    expect(handleDelete).toHaveBeenCalled()
  })

  test('should show values that user has typed', () => {
    render(<RentalForm onSubmit={() => {}} />)
    const titleElement = screen.getByLabelText('Title')
    const descElement = screen.getByLabelText('Description')
    const imageElement = screen.getByLabelText('Image URL')
    const priceElement = screen.getByLabelText('Price')

    userEvent.type(titleElement, FAKE_DATA.title)
    expect(titleElement).toHaveValue(FAKE_DATA.title)

    userEvent.type(descElement, FAKE_DATA.desc)
    expect(descElement).toHaveValue(FAKE_DATA.desc)

    userEvent.type(imageElement, FAKE_DATA.image)
    expect(imageElement).toHaveValue(FAKE_DATA.image)

    userEvent.type(priceElement, FAKE_DATA.price.toString())
    expect(priceElement).toHaveValue(FAKE_DATA.price)
  })

  test('should submit the whole form filled in by the user', () => {
    const handleSubmit = jest.fn()
    render(<RentalForm onSubmit={handleSubmit} />)

    userEvent.type(screen.getByLabelText('Title'), FAKE_DATA.title)
    userEvent.type(screen.getByLabelText('Description'), FAKE_DATA.desc)
    userEvent.type(screen.getByLabelText('Image URL'), FAKE_DATA.image)
    userEvent.type(screen.getByLabelText('Price'), FAKE_DATA.price.toString())

    userEvent.click(screen.getByRole('button', { name: 'Publish' }))
    expect(handleSubmit).toHaveBeenCalledWith(FAKE_DATA)
  })
})
