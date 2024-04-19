import { render, screen } from '@testing-library/react'
import About from '../Components/About'
import '@testing-library/jest-dom'

test('contact page', () => {
    render(<About />)
    const heading = screen.getByRole('heading')

    //Assertion
    expect(heading).toBeInTheDocument()
})
