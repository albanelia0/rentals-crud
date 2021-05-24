import { render, screen } from '@testing-library/react'
import Card from '.'

const FAKE_CARD_PROPS = {
  id: '43',
  title: 'Perfect place',
  desc: 'Suite',
  image: 'https://www.armstrongflooring.com/content/dam/armstrongflooring/residential/photo-gallery/RSD7133_F6_1A.jpg',
  price: 90
}

describe('Card', () => {
  test('should display all rental data', () => {
    render(<Card {...FAKE_CARD_PROPS} />)
    const img = screen.getByRole('img')

    expect(screen.getByText(FAKE_CARD_PROPS.title)).toBeInTheDocument()
    expect(screen.getByText(FAKE_CARD_PROPS.desc)).toBeInTheDocument()
    expect(screen.getByText(`${FAKE_CARD_PROPS.price} €`)).toBeInTheDocument()
    expect(img).toHaveAttribute('src', FAKE_CARD_PROPS.image)
  })
})
