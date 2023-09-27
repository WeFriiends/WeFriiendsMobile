import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import { Text, Button } from 'react-native-paper'

const SignUpFooter = () => {
  return (
    <>
      <View style={styles.emptyContainer}></View>
      <View style={styles.signContainer}>
        <Text variant="titleLarge">Don't have an account?</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  signContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  emptyContainer: {
    minHeight: '15%',
    maxHeight: '30%',
  },
  signText: {
    color: '#1D878C',
  },
})

export default SignUpFooter
