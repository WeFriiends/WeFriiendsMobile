import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import { Card, Text } from 'react-native-paper'
import { Link } from 'solito/link'
import { baseUrl } from 'app/actions/constants'
import GoogleSvgComponent from '../../../public/GoogleSvgComponent'

const GoogleOption = () => {
  return (
    <View style={styles.viewContainer}>
      <Link href={`${baseUrl}/api/auth/google`}>
        <Card style={styles.cardContainer}>
          <Card.Content style={styles.cardContent}>
            <GoogleSvgComponent />
            <Text variant="bodyMedium">Google</Text>
          </Card.Content>
        </Card>
      </Link>
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

export default GoogleOption
