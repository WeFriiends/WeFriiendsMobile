import { FC } from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import { Text, Button } from 'react-native-paper'

type RegistrationOptionsHeaderProps = {
  signOption?: string
}

const RegistrationOptionsHeader: FC<RegistrationOptionsHeaderProps> = ({
  signOption,
}) => {
  const signInOption = <Text style={styles.coloredText}>Sign In</Text>
  const signUpOption = (
    <>
      <Text style={styles.coloredText}>New here?</Text>
      <Text variant="titleLarge">Create an account</Text>
    </>
  )
  return (
    <View style={styles.textBlock}>
      {signOption ? signInOption : signUpOption}
    </View>
  )
}

const styles = StyleSheet.create({
  textBlock: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 50,
  },
  coloredText: {
    color: '#F46B5D',
    fontWeight: '600',
    lineHeight: 40,
    fontSize: 32,
  },
})

export default RegistrationOptionsHeader
