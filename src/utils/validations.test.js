import { loginFormValidation, nameFormValidation } from './validations'

describe('loginFormValidation', () => {
  test('accepts a valid email and password', () => {
    expect(loginFormValidation('viewer@example.com', 'Password1')).toBe('')
  })

  test('rejects an invalid email', () => {
    expect(loginFormValidation('not-an-email', 'Password1')).toBe(
      'Please enter a valid email address.'
    )
  })

  test('rejects a password without the required length, letter, or number', () => {
    expect(loginFormValidation('viewer@example.com', 'short1')).toMatch(
      /at least 8 characters/
    )
    expect(loginFormValidation('viewer@example.com', 'passwordonly')).toMatch(
      /include a letter and a number/
    )
  })
})

describe('nameFormValidation', () => {
  test.each(["Jane Doe", "O'Connor", 'Anne-Marie', 'José Álvarez', 'O’Connor'])(
    'accepts the name %s',
    (name) => {
      expect(nameFormValidation(name)).toBe('')
    }
  )

  test.each(['', 'Jane123', 'Jane_Doe'])('rejects the name %s', (name) => {
    expect(nameFormValidation(name)).toMatch(/valid name/)
  })
})
