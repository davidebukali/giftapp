import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { FAB, List } from 'react-native-paper';

const OrderList = ({ navigation }) => {
  const navigateToAddReminder = () => {
    navigation.navigate('AddReminder');
  };

  return (
    <View style={styles.scrollViewContainer}>
      <ScrollView style={styles.container}>
        <List.Section style={styles.listSection}>
          <List.Item
            title="Mildred Pedun"
            description={() => {
              return (
                <View>
                  <Text style={styles.listDescription}>
                    Chocolate, red velvet and flowers
                  </Text>
                  <Text style={styles.listSubDescription}>Birthday</Text>
                  <Text style={styles.listSubDescription}>Ugx 200,000/=</Text>
                </View>
              );
            }}
            contentStyle={{ padding: 0, margin: 0, top: 0 }}
            titleStyle={styles.listTitle}
            onPress={() => {}}
          />

          <List.Item
            title="Tracy Kirabo"
            description={() => {
              return (
                <View>
                  <Text style={styles.listDescription}>
                    Chocolate, red velvet and flowers
                  </Text>
                  <Text style={styles.listSubDescription}>Anniversary</Text>
                  <Text style={styles.listSubDescription}>Ugx 150,000/=</Text>
                </View>
              );
            }}
            contentStyle={{
              padding: 0,
              margin: 0,
              top: 0,
            }}
            titleStyle={styles.listTitle}
            onPress={() => {}}
          />
        </List.Section>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    height: 800,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    padding: 5,
  },
  listSection: { padding: 5, marginBottom: 5 },
  listTitle: { padding: 0, margin: 0, fontSize: 20, marginTop: 5 },
  listDescription: { fontSize: 15 },
  listSubDescription: { fontSize: 14, fontStyle: 'italic', marginTop: 5 },
  listImage: {
    borderWidth: 1,
    borderColor: 'thistle',
  },
  // fabContainer: {
  //   paddingBottom: 40,
  // },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 50,
  },
});

export default OrderList;
