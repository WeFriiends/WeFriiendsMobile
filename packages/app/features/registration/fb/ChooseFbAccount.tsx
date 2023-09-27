import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import Logo from 'app/public/Logo'
import { Avatar, Button, Card, Text, TextInput } from 'react-native-paper'

const ChooseFbAccount = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}
    >
      <View style={styles.registrationContainer}>
        <Text style={styles.coloredText} variant="headlineMedium">
          1
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  registrationContainer: {
    margin: 20,
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

export default ChooseFbAccount
