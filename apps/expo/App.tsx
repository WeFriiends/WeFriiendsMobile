import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import { UserProvider } from 'app/context/login/UserContext'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
}

export default function App() {
  return (
    <Provider>
      {/* <UserProvider> */}

      <PaperProvider theme={theme}>
        <NativeNavigation />
      </PaperProvider>

      {/* </UserProvider> */}
    </Provider>
  )
}
