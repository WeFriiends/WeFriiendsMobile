import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import { Avatar, Button, Card, Text } from 'react-native-paper'

const FbRegistration = () => {
  return (
    <View>
      <Card onPress={() => console.log('FB')} style={styles.cardContainer}>
        <Card.Content>
          {/* <Avatar.Image size={24} source={require('../public/facebook.png')} /> */}
          <Text variant="bodyMedium">Facebook</Text>
        </Card.Content>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFF1EC',
  },
})

export default FbRegistration
