import {
   Button,
   StyleSheet,
   Text
} from 'react-native'
import MaskInput, { Masks, useMaskedInputProps }from 'react-native-mask-input';
import { enGB, registerTranslation } from 'react-native-paper-dates'
import { useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';
import Data from '../Data'
import { DatePickerInput } from 'react-native-paper-dates';
import { Profile } from '../../types/Profile'
import Prompt from '../Prompt'
import React from 'react'
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Step } from '../../types/Step'
import { TextInput } from 'react-native-paper';
import { View } from 'dripsy'
import dayjs from 'dayjs';

registerTranslation('en-GB', enGB)

type AddDateOfBirthProps = {
  step: Step
  navigateToNextStep: any
  dob: any
}

const AddDateOfBirth = (props: AddDateOfBirthProps) => {
const [dob, setDob] = useState();
  const [profile, setProfile] = useState<Profile>()
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [inputDate, setInputDate] = useState('');
  const [isValid, setIsValid] = useState(true);
  const handleDateChange = (event: any) => {

  };

  const formatInputDate = (value: any) => {
    //format date
  };

  const handleInput = (action: string) => {
    console.log(dob)
 //   const isDobValid = validateDob(dob);
    // if (isDobValid) {
    //   //  handlePress(action);
    //   //  props.navigateToNextStep(action)
    // } else {
    //     setErrorMessage('Invalid date');
    //     return;
    // }
  }

  const handlePress = (action: string) => {
    
    props.navigateToNextStep(action)
  }

  return (
    <View sx={{ mt: 4, alignItems: 'center' }}>
      <View>
        <Prompt text={props.step.prompt} />
      </View>
      <View>
        <Data data={props.step.data} />
        </View>
        <View>
        <Button title="Prev" onPress={() => handleInput('prev')} />
     
      </View>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
  
      <View sx={{ justifyContent: 'center', flex: 1, alignItems: 'center',  mt: 4,  mb: 4, }}>
      <TextInput
         
          value={inputDate}
          onChange={handleDateChange}
          placeholder="MM-DD-YYYY"
        />
      </View>
   
     <View>
      <Button title="Next" onPress={() => handleInput('next')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
      },
    input: {
      backgroundColor: '#FFF1EC',
      height: 40,
      margin: 12,
      padding: 10,
      width: 300,
      borderRadius: 5,
    },
    button: {
      marginTop: 10,
      borderWidth: 2,
      borderRadius: 5,
      borderColor: 'salmon',
      width: 300,
      height: 40,
      alignItems: 'center',
      padding: 5,
    },
    btnText: {
      fontSize: 18,
      color: 'salmon',
    },
   
  })
export default AddDateOfBirth
