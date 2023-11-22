import { fetchMailSignIn } from '../../actions/registration/mail/mailSignIn'

export const mailSignIn = async (email: string, password: string) => {
  const response = await fetchMailSignIn(email, password)

  const token = response.data.token
  if (token) {
    localStorage.setItem('user', token)
  }

  return response.data
}

export const isAuthenticated = () => {
  const user = null // localStorage.getItem('user')
  if (!user) {
    return {}
  }
  return JSON.parse(user)
}
