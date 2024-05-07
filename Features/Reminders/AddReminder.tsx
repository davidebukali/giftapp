import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const AddReminder = () => {
  const [image, setImage] = useState('');
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <Image
              source={require('../../assets/placeholder.png')}
              style={styles.image}
            />
          )}
        </Pressable>
        <TextInput
          mode="outlined"
          label="Names"
          placeholder="Who is the gift for ?"
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Date"
          placeholder="When is the event due ?"
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          inputMode="numeric"
          label="Phone"
          placeholder="Phone number "
          style={styles.input}
        />
        <Button mode="contained">Save</Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
  },
  input: {
    marginBottom: 10,
  },
  image: {
    height: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 300,
    marginBottom: 10,
  },
});

export default AddReminder;
