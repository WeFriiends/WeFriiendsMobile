import axios from 'axios'
import { baseUrl } from '../../constants'

type MailAccountRegistrationResponse = {
  result: number
  data: {
    message: string
  }
}

export const mailAccountRegistration = async (
  password1: string,
  password2: string,
  email: string
): Promise<MailAccountRegistrationResponse | undefined> => {
  try {
    console.log('in registration create')
    const result = await axios.post(`${baseUrl}/api/auth/register`, {
      password: password1,
      password2: password2,
      email: email,
    })
    console.log({ result })

    if (result.status === 200) {
      return result.data.m
    }
  } catch (err) {
    console.log(err)
  }
}

export const mailAccountConfirmation = async (confirmationCode: string) => {
  try {
    const result = await axios.get(
      `https://clumsy-glasses-clam.cyclic.app/api/auth/confirm/${confirmationCode}`,
     // confirmationCode
    )
    console.log('result status: ', result.status)
    if (result.status === 200) return true
    else return false
  } catch (err) {
    console.log('error:', err)
    return false
  }
}
