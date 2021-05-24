import { useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchBar from '.'

describe('SearchBar', () => {
  test('should display a textbox', () => {
    render(<SearchBar value='' onChange={() => {}} />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  test('should display a creation button', () => {
    render(<SearchBar value='' onChange={() => {}} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('should show the text that user types in', () => {
    const Container = (): JSX.Element => {
      const [value, setValue] = useState('')
      return <SearchBar value={value} onChange={setValue} />
    }
    render(<Container />)
    const textbox = screen.getByRole('textbox')
    userEvent.type(textbox, 'flat')
    expect(textbox).toHaveValue('flat')
  })

  test('should remove the existing text if the user clears it', () => {
    const Container = (): JSX.Element => {
      const [value, setValue] = useState('initial search')
      return <SearchBar value={value} onChange={setValue} />
    }
    render(<Container />)
    const textbox = screen.getByRole('textbox')
    userEvent.clear(textbox)
    expect(textbox).toHaveValue('')
  })
})
