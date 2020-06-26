import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import colors from '../components/config/colors';
import AppTextInput from '../components/AppTextInput';
import AppPicker from '../components/AppPicker';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 },
];

const CategoryScreen = () => {
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        placeholder='category'
        icon='apps'
      />
      <AppTextInput icon='email' placeholder='Username' />
    </Screen>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  inputFiled: {
    borderBottomColor: colors.light,
    borderBottomWidth: 2,
    height: 30,
  },
});
