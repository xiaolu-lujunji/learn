import validateUrl from './url-validation'

describe('validateUrl', () => {
  test('www.google.com', () => {
    expect(validateUrl('www.google.com')).toBe(false)
    expect(validateUrl('https://www.google.com')).toBe(true)
  })
})
