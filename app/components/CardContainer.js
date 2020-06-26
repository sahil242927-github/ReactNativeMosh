import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from './Card';

const CardContainer = () => {
  return (
    <View style={styles.cardContainer}>
      <Card
        title='Red Jacket for sale'
        subTitle='$100'
        image={require('../assets/red-jacket.jpg')}
      />
    </View>
  );
};

export default CardContainer;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: '#f8f4f4',
    padding: 20,
    paddingTop: 100,
  },
});
