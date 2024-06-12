import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import uuid from 'react-native-uuid';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb',
    name: 'Cakes',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Flowers',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Chocolates',
  },
  {
    id: '58694a0f-3da1-471f-5571e29d72',
    name: 'Hampers',
  },
  {
    id: '4a0f-3da1-471f-bd96-145571e29d72',
    name: 'Custom',
  },
];

const { width } = Dimensions.get('window');
const GiftVendor = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        width: width,
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => navigation.navigate('GiftList')}>
              <View style={styles.item}>
                <Image
                  source={require('../../../assets/placeholder.png')}
                  style={styles.image}
                />
                <Text style={styles.text}>{item.name}</Text>
              </View>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    maxWidth: '100%',
    height: 150,
    padding: 10,
  },
  image: {
    marginBottom: 10,
  },
  text: {
    alignContent: 'center',
  },
});

export default GiftVendor;
