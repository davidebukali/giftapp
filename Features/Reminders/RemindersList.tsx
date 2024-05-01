import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { List } from 'react-native-paper';

const RemindersList = ({ nav }) => {
  return (
    <>
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
              nav.navigate('AddReminder');
            }}
          />
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
          />
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
          />
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
          />
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
          />
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
          />
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
          />
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
          />
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
          />
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
          />
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
          />
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
          />
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
          />
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
          />
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
          />
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
          />
        </List.Section>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
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
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'thistle',
  },
});

export default RemindersList;
