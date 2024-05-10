import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';

const Profile = () => {
  return (
    <>
      <View style={styles.container}>
        <TextInput
          mode="outlined"
          label="Names"
          placeholder="Your names ?"
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          inputMode="email"
          label="Email"
          placeholder="Your email address ?"
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          inputMode="numeric"
          label="Phone"
          placeholder="Phone number"
          style={styles.input}
        />
        <TextInput
          label="Password"
          placeholder="Change password"
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.btncontainer}>
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
  btncontainer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: 10,
  },
  defaultimage: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
  },
  galleryimage: {
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 300,
    width: 300,
  },
});

export default Profile;
