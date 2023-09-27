import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import { Card, Text } from 'react-native-paper'
import FbSvgComponent from '../../../public/FbSvgComponent'

const FbOption = () => {
  return (
    <View style={styles.viewContainer}>
      <Card onPress={() => console.log('FB')} style={styles.cardContainer}>
        <Card.Content style={styles.cardContent}>
          <FbSvgComponent />
          <Text variant="bodyMedium">Facebook</Text>
        </Card.Content>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    paddingBottom: 20,
  },
  cardContainer: {
    backgroundColor: '#FFF1EC',
    boxShadow: 'none',
    alignItems: 'center',
    cursor: 'pointer',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
  },
})

export default FbOption
