import { Button, Card, Text, TextInput } from 'react-native-paper'
import { Controller, useForm } from 'react-hook-form'
import {
  eightCharsMin,
  loginPattern,
  patternChars,
  patternLetters,
  patternNum,
} from './regexPatterns'
import { useEffect, useState } from 'react'

import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import { mailAccountRegistration } from '../../../actions/registration/mail/mailRegistration'
import useEyeIcon from '../../../hooks/useEyeIcon'

const MailCreds = () => {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
      morePassword: '',
    },
    mode: 'onBlur',
  })

  const { isVisible, onSetVisible, icon } = useEyeIcon()

  const validPass = watch('password')
  const containsNumbers = patternNum.test(validPass)
  const containsLetters = true; //patternLetters.test(validPass)
  const containsChars = true; //patternChars.test(validPass)
  const containsMinChars = true; //eightCharsMin.test(validPass)

  const getDashOrCheck = (isValid: boolean) => {
    const fontColor = isValid ? '#1D878C' : '#F46B5D'
    if (!isValid) {
      return <Text style={{ color: fontColor }}>-</Text>
    }
    return <TextInput.Icon icon="check" color={fontColor} />
  }

  const onSubmit = async ({ login, morePassword, password }: any) => {
    console.log('press onSubmit')
    await mailAccountRegistration(password, morePassword, login)
  }

  return (
    <View>
      <Text style={styles.labelText}>Login</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputContainer}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="login"
        rules={{
          required: true,
          pattern: {
            value: loginPattern,
            message: 'Invalid email address',
          },
        }}
      />
      {errors.login && (
        <Text style={styles.errorText}>{errors.login.message}</Text>
      )}
      <Text style={styles.labelText}>Password</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputContainer}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            secureTextEntry={!isVisible}
            right={
              <TextInput.Icon onPress={() => onSetVisible()} icon={icon} />
            }
          />
        )}
        name="password"
        rules={{
          required: true,
          validate: {
            matchPatternNum: (v) => true, //patternNum.test(v),
            matchPatternLetters: (v) => true, //patternLetters.test(v),
            matchPatternChars: (v) => true, //patternChars.test(v),
            matchEightCharsMin: (v) => true, //eightCharsMin.test(v),
          },
        }}
      />
      <Text style={styles.labelText}>One more time</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputContainer}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            secureTextEntry={!isVisible}
            right={
              <TextInput.Icon onPress={() => onSetVisible()} icon={icon} />
            }
          />
        )}
        name="morePassword"
        rules={{
          required: true,
          validate: (value) => {
            if (watch('password') !== value) {
              console.log({ value })
              return 'Your passwords do not match'
            }
          },
        }}
      />
      {errors.morePassword && (
        <Text style={styles.errorText}>{errors.morePassword.message}</Text>
      )}
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          textColor="white"
          onPress={handleSubmit(onSubmit)}
        //   disabled={!isValid}
        >
          create
        </Button>
      </View>
      <Card style={styles.passValidationCard}>
        <Card.Content>
          <Text variant="bodyMedium">Your Password must have</Text>
          <View style={styles.passValidationItem}>
            {getDashOrCheck(containsMinChars)}
            <Text
              style={{
                color: containsMinChars ? '#1D878C' : '#F46B5D',
                marginLeft: 20,
              }}
              variant="bodyMedium"
            >
              8 or more letters
            </Text>
          </View>
          <View style={styles.passValidationItem}>
            {getDashOrCheck(containsNumbers)}
            <Text
              variant="bodyMedium"
              style={{
                color: containsNumbers ? '#1D878C' : '#F46B5D',
                marginLeft: 20,
              }}
            >
              numbers
            </Text>
          </View>
          <View style={styles.passValidationItem}>
            {getDashOrCheck(containsLetters)}
            <Text
              variant="bodyMedium"
              style={{
                color: containsLetters ? '#1D878C' : '#F46B5D',
                marginLeft: 20,
              }}
            >
              letters
            </Text>
          </View>
          <View style={styles.passValidationItem}>
            {getDashOrCheck(containsChars)}
            <Text
              variant="bodyMedium"
              style={{
                color: containsChars ? '#1D878C' : '#F46B5D',
                marginLeft: 20,
              }}
            >
              special characters
            </Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#FFF1EC',
    borderRadius: 4,
  },
  labelText: {
    paddingBottom: 5,
    paddingTop: 20,
  },
  buttonContainer: {
    paddingTop: 42,
  },
  button: {
    backgroundColor: '#FB8F67',
    borderRadius: 4,
  },
  errorText: {
    color: 'red',
  },
  passValidationItem: {
    display: 'flex',
    flexDirection: 'row',
  },
  passValidationCard: {
    marginTop: 10,
    backgroundColor: '#fffff',
  },
})

export default MailCreds
