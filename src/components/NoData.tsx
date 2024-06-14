import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NoData = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        Please check your internet connection ...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    padding: 10,
  },
  message: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NoData;
