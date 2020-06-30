import React, { useRef } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ImageInput from './ImageInput';

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  const scrollView = useRef();
  return (
    <View style={{ height: 110 }}>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View style={styles.image} key={uri}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}

          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 0,
    padding: 0,
    backgroundColor: 'red',
    height: 100,
  },
  image: {
    marginRight: 10,
  },
});