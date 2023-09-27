import { Button, Text } from 'react-native-paper'
import {
  FooterSvgComponent,
  HeaderSvgComponent,
} from 'app/public/GladScreenSvg'
import { useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from 'app/public/Logo'
import { StyleSheet } from 'react-native'
import { TextLink } from 'solito/link'
import { View } from 'dripsy'
import axios from 'axios'
import { createParam } from 'solito'

const GladScreen = () => {
    const { useParam } = createParam()
    const [id] = useParam('id');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
  useEffect(() => {
   if (!id) {
    return
   }

    verifyUser();
  }, [id])  

  const verifyUser = async() => {
    console.log(id)
    try {
        const response = await axios.get(
          `https://clumsy-glasses-clam.cyclic.app/api/auth/confirm/${id}`
        );
        console.log(response.data);
        //put token into localstorage
        await AsyncStorage.setItem(
            'token',
            response.data,
          );
        setIsLoading(false);
      } catch (e) {
        //redirect back to signup
        console.log(e);
      }
  }
  return (
    <View>
    {
        isLoading ? (<Text>In Progress</Text>) : (
            <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              alignItems: 'center',
            }}
          >
            <HeaderSvgComponent />
            <View
              style={{
                alignItems: 'center',
              }}
            >
              <View style={styles.logoView}>
                <Logo />
              </View>
              <Text style={styles.textGlad}>
                Glad you're
                <br />
                here! <br />
                Hope, you'll
                <br />
                enjoy!
              </Text>
              <View style={styles.buttonContainer}>
              <TextLink href="/user/profile">👈 Go to Profile</TextLink>
                {/* <Button
                  style={styles.button}
                  textColor="white"
                  onPress={handleSubmit(onSubmit)}
                >
                  let's start
                </Button> */}
              </View>
            </View>
            <FooterSvgComponent />
          </View>
        )
    }

</View>
  )
}

const styles = StyleSheet.create({
  registrationContainer: {
    margin: 20,
  },
  logoView: {
    height: 80,
    marginTop: 30,
    overflow: 'hidden',
  },
  textGlad: {
    fontSize: 40,
    lineHeight: 60,
  },
  gladContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    paddingTop: 50,
  },
  button: {
    backgroundColor: '#FB8F67',
    borderRadius: 4,
  },
  imageTop: {
    width: '100%',
    height: 'auto',
  },
  imageBottom: {
    width: '100%',
    height: 'auto',
  },
})

export default GladScreen
