import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Screen from '../components/Screen';
import colors from '../components/config/colors';
import AppTextInput from '../components/forms/AppTextInput';
import AppSwitch from '../components/AppSwitch';

const FormScreen = () => {
  const [firstname, setFirstName] = useState('');

  return (
    <Screen>
      <Text>{firstname}</Text>
      <TextInput
        onChangeText={(text) => setFirstName(text)}
        style={styles.inputFiled}
        placeholder='firstname'
      />
      <AppTextInput icon='email' placeholder='Username' />

      <AppSwitch />
    </Screen>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  inputFiled: {
    borderBottomColor: colors.light,
    borderBottomWidth: 2,
    height: 30,
  },
});
