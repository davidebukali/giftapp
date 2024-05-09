import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { FAB, List } from 'react-native-paper';

const RemindersList = ({ navigation }) => {
  const navigateToAddReminder = () => {
    navigation.navigate('AddReminder');
  };

  return (
    <View style={styles.scrollViewContainer}>
      <ScrollView style={styles.container}>
        <List.Section style={styles.listSection}>
          <List.Subheader>Reminders</List.Subheader>
          <List.Item
            title="Birthday"
            description={() => {
              return (
                <View>
                  <Text style={styles.listDescription}>
                    Tracy Kirabo on 31st May
                  </Text>
                  <Text style={styles.listSubDescription}>2 weeks to go</Text>
                </View>
              );
            }}
            left={() => (
              <Image
                style={styles.listImage}
                source={require('../../assets/placeholder.png')}
              />
            )}
            contentStyle={{ padding: 0, margin: 0, top: 0 }}
            titleStyle={styles.listTitle}
            onPress={() => {
              console.log('You tapped the button!');
              navigation.navigate('ViewReminder');
            }}
          />
        </List.Section>
      </ScrollView>
      <FAB icon="plus" style={styles.fab} onPress={navigateToAddReminder} />
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

export default RemindersList;
