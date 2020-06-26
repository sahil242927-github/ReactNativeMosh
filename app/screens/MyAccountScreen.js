import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from '../components/Screen';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';

const MyAccountScreen = () => {
  return (
    <Screen>
      <ListItem
        title='My Title'
        subTitle='My SubTitle'
        IconComponent={<Icon name='email' />}
      />
    </Screen>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({});
