import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
  },
  message: {
    fontWeight: 'bold',
  },
});

export default Header;
