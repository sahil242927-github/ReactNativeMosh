import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppText from '../components/AppText';
import colors from '../components/config/colors';
import ListItem from '../components/ListItem';

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require('../assets/red-jacket.jpg')}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/office-girl.jpg')}
            title='Mohd Sahil'
            subTitle='5 Listing'
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 50,
  },
});
