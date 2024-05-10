import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import uuid from 'react-native-uuid';

const { width } = Dimensions.get('window');
const GiftCategory = ({ navigation }) => {
  return (
    <View style={[styles.container, { width: width }]}>
      <Pressable onPress={() => navigation.navigate('GiftList')}>
        <View style={styles.item}>
          <Image
            source={require('../../../assets/placeholder.png')}
            style={styles.image}
          />
          <Text style={styles.text}>{'Cakes'}</Text>
        </View>
      </Pressable>
      <View style={styles.item}>
        <Image
          source={require('../../../assets/placeholder.png')}
          style={styles.image}
        />
        <Text style={styles.text}>{'Flowers'}</Text>
      </View>
      <View style={styles.item}>
        <Image
          source={require('../../../assets/placeholder.png')}
          style={styles.image}
        />
        <Text style={styles.text}>{'Chocolates'}</Text>
      </View>
      <View style={styles.item}>
        <Image
          source={require('../../../assets/placeholder.png')}
          style={styles.image}
        />
        <Text style={styles.text}>{'Hampers'}</Text>
      </View>
      <View style={styles.lastItem}>
        <Image
          source={require('../../../assets/placeholder.png')}
          style={styles.image}
        />
        <Text style={styles.text}>{'Custom'}</Text>
      </View>
      <View style={styles.lastView}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-around',
    gap: 10,
  },
  item: {
    maxWidth: '50%',
    height: 150,
    padding: 10,
  },
  image: {
    marginBottom: 10,
  },
  text: {
    alignContent: 'center',
  },
  lastItem: {
    maxWidth: '50%',
    height: 150,
    padding: 10,
    marginLeft: 5,
  },
  lastView: {
    width: '50%',
    height: 150,
    padding: 10,
  },
});

export default GiftCategory;
