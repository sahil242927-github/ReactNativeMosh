import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import {
  AppForm,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from '../components/forms';

import Screen from '../components/Screen';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/FormImagePicker';
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('title'),
  category: Yup.string().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select atleast one image'),
});

const categories = [
  { label: 'Furniture', value: 1, backgroundColor: 'green', icon: 'apps' },
  { label: 'Clothing', value: 2, backgroundColor: 'dodgerblue', icon: 'email' },
  { label: 'Camera', value: 3, backgroundColor: 'tomato', icon: 'lock' },
  {
    label: 'Cars',
    value: 4,
    backgroundColor: '#74b9ff',
    icon: 'directions-car',
  },
  { label: 'Games', value: 5, backgroundColor: '#00cec9', icon: 'games' },
  { label: 'Spa', value: 6, backgroundColor: '#ff7675', icon: 'spa' },
  {
    label: 'Electronics & Accessories',
    value: 7,
    backgroundColor: '#e84393',
    icon: 'laptop-chromebook',
  },
  {
    label: 'Alarm',
    value: 8,
    backgroundColor: '#6c5ce7',
    icon: 'access-alarms',
  },
  {
    label: 'Camera',
    value: 9,
    backgroundColor: '#fdcb6e',
    icon: 'photo-camera',
  },
];

const ListingEditScreen = () => {
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name='images' />
        <FormField maxLength={255} name='title' placeholder='Title' />
        <FormField
          keyboardType='numeric'
          maxLength={8}
          name='price'
          placeholder='Price'
          width={120}
        />
        <FormField
          maxLength={255}
          multiline
          name='description'
          numberOfLines={3}
          placeholder='Description'
        />
        <Picker
          items={categories}
          numberOfColumns={3}
          name='category'
          placeholder='Category'
          width='50%'
          PickerItemComponent={CategoryPickerItem}
        />

        <SubmitButton title='Post' />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});
