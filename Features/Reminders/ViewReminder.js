import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import { Button, Chip } from 'react-native-paper';

const ViewReminder = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require('../../assets/placeholder.png')}
          style={styles.image}
        />
        <Text mode="outlined" label="Names" style={styles.textName}>
          Tracy Kirabo
        </Text>
        <Text
          mode="outlined"
          inputMode="numeric"
          label="Phone"
          style={styles.textPhone}
        >
          0772001098
        </Text>
        <View>
          <Chip
            type="flat"
            icon="information"
            compact={true}
            style={styles.textEvent}
            onPress={() => console.log('Pressed')}
          >
            Birthday
          </Chip>
        </View>
        <Text
          mode="outlined"
          inputMode="numeric"
          label="Phone"
          style={styles.textDue}
        >
          Due in 2 months
        </Text>
      </View>
      <View style={styles.outerContainer}>
        <Button
          mode="contained"
          style={styles.buyGift}
          onPress={() => navigation.navigate('GiftCategory')}
        >
          Buy Gift
        </Button>
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
  textName: {
    fontSize: 15,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  textPhone: {
    fontSize: 15,
    paddingBottom: 10,
  },
  textEvent: {
    fontSize: 15,
    marginBottom: 10,
    width: '50%',
  },
  textDue: {
    fontSize: 15,
    paddingBottom: 10,
    fontStyle: 'italic',
    color: 'gray',
  },
  image: {
    // width: 300,
    // height: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
  },
  buyGift: {
    padding: 10,
    margin: 10,
  },
  outerContainer: {
    backgroundColor: 'transparent',
    width: '100%',
    padding: 5,
  },
});

export default ViewReminder;
