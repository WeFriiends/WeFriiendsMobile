import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import { createParam } from 'solito'
import { Avatar, Button, Card, Text, TextInput } from 'react-native-paper'
import Logo from 'app/public/Logo'
import ChooseFbAccount from './fb/ChooseFbAccount'
import GoogleRegistration from './google/GoogleOption'
import SetMail from './email/MailSignUp'

const ChooseAccScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}
    >
      <View style={styles.logoView}>
        <Logo />
      </View>
      <View style={styles.registrationContainer}>
        <SetMail />
        <View>
          <Text style={styles.coloredText} variant="headlineMedium">
            Choose an account
          </Text>
        </View>
        <ChooseFbAccount />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  registrationContainer: {
    margin: 20,
    display: 'flex',
    alignItems: 'center',
  },
  coloredText: {
    color: '#F46B5D',
  },
  logoView: {
    height: 80,
    marginTop: 30,
    overflow: 'hidden',
  },
})

export default ChooseAccScreen
