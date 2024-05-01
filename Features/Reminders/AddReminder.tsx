import { Image, StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const AddReminder = () => {
  return (
    <>
      <View style={styles.container}>
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
});

export default AddReminder;
