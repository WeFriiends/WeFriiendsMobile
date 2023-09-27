import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import Logo from 'app/public/Logo'

const LogoComponent = () => {
  return (
    <View style={styles.logoView}>
      <Logo />
    </View>
  )
}

export default LogoComponent

const styles = StyleSheet.create({
  logoView: {
    height: 80,
    marginTop: 30,
    overflow: 'hidden',
  },
})
