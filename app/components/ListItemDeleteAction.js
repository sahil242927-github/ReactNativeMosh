import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import colors from './config/colors';
import { MaterialIcons } from '@expo/vector-icons';

const ListItemDeleteAction = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialIcons name='delete' size={50} color={colors.white} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListItemDeleteAction;
