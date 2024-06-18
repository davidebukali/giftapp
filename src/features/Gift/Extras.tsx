import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Checkbox } from 'react-native-paper';

const Extras = ({ data, toggleCheckbox }) => {
  const renderCheckBoxes = (items) => {
    return items.map((item) => {
      return (
        <Checkbox.Item
          key={item.id}
          label={`${item.name} - ${item.price}`}
          status={item.status ? 'checked' : 'unchecked'}
          onPress={() => {
            toggleCheckbox(item.id);
          }}
        />
      );
    });
  };
  return <View style={styles.checkbox}>{renderCheckBoxes(data)}</View>;
};

const styles = StyleSheet.create({
  checkbox: {
    marginTop: 10,
  },
});

export default Extras;
