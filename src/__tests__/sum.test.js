import { sum } from '../Components/sum'

test('sum', () => {
    const result = sum(1, 1)
    expect(result).toBe(2)
})
