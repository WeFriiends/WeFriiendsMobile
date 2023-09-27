import { FC, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import { Link, TextLink } from 'solito/link'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Text, Button } from 'react-native-paper'
import SignUpFooter from './SignUpFooter'
import SignInFooter from './SignInFooter'
import { createParam } from 'solito'
import { RootStackParamList } from 'app/navigation/native'

type RegistrationOptionsFooterProps = {
  signOption?: string
  onPressBackSignUp: () => void
  onPressSignIn: () => void
}

const RegistrationOptionsFooter = ({
  signOption,
  onPressSignIn,
  onPressBackSignUp,
}: RegistrationOptionsFooterProps) => {
  const buttonText = signOption ? 'Sign Up' : 'Sign In'

  return (
    <>
      {signOption ? <SignUpFooter /> : <SignInFooter />}
      <Button
        mode="text"
        onPress={() => {
          if (signOption) {
            onPressBackSignUp()
          } else {
            onPressSignIn()
          }
        }}
      >
        {buttonText}
      </Button>
    </>
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
  signText: {
    color: '#1D878C',
  },
})

export default RegistrationOptionsFooter
