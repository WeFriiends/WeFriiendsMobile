import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import { Text } from 'react-native-paper'
import MailSignUp from './MailSignUp'
import MailSignIn from './MailSignIn'
import LogoComponent from 'app/components/LogoComponent'
import { createParam } from 'solito'

const MailCredsContainer = () => {
  const { useParam } = createParam()
  const [mailSign] = useParam('mail-option')
  console.log({ mailSign })
  const title = mailSign === 'mail-sign-in' ? 'Sign In' : 'Enter e-mail'
  return (
    <View>
      <LogoComponent />
      <View style={styles.registrationContainer}>
        <View style={styles.textBlock}>
          <Text style={styles.coloredText}>{title}</Text>
        </View>
        {mailSign === 'mail-sign-in' ? <MailSignIn /> : <MailSignUp />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  registrationContainer: {
    margin: 10,
  },
  textBlock: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 20,
  },
  coloredText: {
    color: '#F46B5D',
    fontWeight: '600',
    lineHeight: 40,
    fontSize: 32,
  },
  logoView: {
    height: 80,
    marginTop: 30,
    overflow: 'hidden',
  },
})

export default MailCredsContainer
