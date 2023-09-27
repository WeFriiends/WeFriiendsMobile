import { useState, useEffect, createContext, ReactNode } from 'react'

import MailSignIn from '../../features/registration/email/MailSignIn'
import { isAuthenticated } from '../../features/auth/AuthService'

export interface User {
  authToken?: string
}

interface AuthContext {
  currentUser: User | null
  setCurrentUser: (user: User | null) => void
}

const UserContext = createContext<AuthContext>({
  currentUser: null,
  setCurrentUser: () => {},
})

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    const checkLoggedIn = async () => {
      let cuser = isAuthenticated()
      if (cuser === null) {
        localStorage.setItem('user', '')
        cuser = ''
      }

      setCurrentUser(cuser)
    }

    checkLoggedIn()
  }, [])

  console.log('usercontext', currentUser)

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {currentUser?.authToken ? children : <MailSignIn />}
    </UserContext.Provider>
  )
}

export default UserContext
