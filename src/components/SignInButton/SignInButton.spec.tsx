import { render, screen } from '@testing-library/react'
// import { mocked } from 'ts-jest/utils'
import { useSession } from 'next-auth/client'
import { SignInButton } from '.'

jest.mock('next-auth/client')

describe('SignInButto component', () => {
  it('renders correctly when user is not logged in', () => {
    // const useSessionMocked = mocked(useSession)
    const useSessionMocked = jest.mocked(useSession)
    useSessionMocked.mockReturnValueOnce([null, false])

    render(<SignInButton />)

    expect(screen.getByText('Sign in with Github')).toBeInTheDocument()
  })

  it('renders correctly when user is logged on', () => {
    const useSessionMocked = jest.mocked(useSession)
    useSessionMocked.mockReturnValueOnce([
      {
        user: {
          name: 'Jhon Doe',
          email: 'jhon@gmail.com'
        },
        expires: 'falke-expires'
      },
      false
    ])
    render(<SignInButton />)

    expect(screen.getByText('Jhon Doe')).toBeInTheDocument()
  })
})
