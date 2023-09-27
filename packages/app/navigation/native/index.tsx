import GladScreen from '../../features/registration/glad-screen/GladScreen'
import { HomeScreen } from '../../features/home/screen'
import MailCreds from '../../features/registration/email/MailCredsContainer'
import ProfileScreen from 'app/features/user/profile-screen'
import RegistrationOptionsScreen from '../../features/registration/RegistrationOptionsScreen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type RootStackParamList = {
  home: undefined
  signIn: undefined
  'mail-sign-up': undefined
  'mail-sign-in': undefined
  'glad-screen': {
    id: string
  } //undefined
  'user-detail': {
    id: string
  }
  'user-profile': {
    id: string
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={RegistrationOptionsScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="signIn"
        component={RegistrationOptionsScreen}
        options={{
          title: 'Sign In',
        }}
      />
      <Stack.Screen
        name="mail-sign-up"
        component={MailCreds}
        options={{
          title: 'Mail Registration',
        }}
      />
      <Stack.Screen
        name="mail-sign-in"
        component={MailCreds}
        options={{
          title: 'Mail Sign In',
        }}
      />
      <Stack.Screen
        name="glad-screen"
        component={GladScreen}
        options={{
          title: 'Glad Screen',
        }}
       
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      />
      <Stack.Screen
        name="user-profile"
        component={ProfileScreen}
        options={{
          title: 'User Profile',
        }}
      />
    </Stack.Navigator>
  )
}
