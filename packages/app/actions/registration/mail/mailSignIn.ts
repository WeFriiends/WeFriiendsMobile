import axios, { AxiosResponse } from 'axios'
import { baseUrl } from '../../constants'

type MailSignInResponse = {
  data: {
    token: string
    message: string
  }
}

export const fetchMailSignIn = async (
  email: string,
  password: string
): Promise<MailSignInResponse> => {
  try {
    const result = await axios.post(`${baseUrl}/api/auth/signin`, {
      email: email,
      password: password,
    })
    console.log({ result })

    return result
  } catch (err) {
    return err
  }
}
