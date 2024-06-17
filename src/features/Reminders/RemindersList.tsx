import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { FAB, List } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { format, formatDistance } from 'date-fns';
import { useWindowDimensions } from 'react-native';
import { selectReminders } from './reminderSlice';

const RemindersList = ({ navigation }) => {
  const data = useSelector(selectReminders);
  const { height } = useWindowDimensions();

  let reminderList;
  if (data && data.length > 0) {
    reminderList = data.map((reminder) => {
      return (
        <List.Item
          key={reminder.id}
          title={reminder.eventtype}
          description={() => {
            return (
              <View>
                <Text style={styles.listDescription}>
                  {reminder.names} on {format(new Date(reminder.date), 'PPPP')}
                </Text>
                <Text style={styles.listSubDescription}>
                  {formatDistance(new Date(reminder.date), new Date(), {
                    addSuffix: true,
                  })}
                </Text>
              </View>
            );
          }}
          left={() => {
            return (
              (reminder.image && (
                <Image
                  source={{ uri: reminder.image }}
                  style={styles.listImage}
                />
              )) || (
                <Image
                  style={styles.listImage}
                  source={require('../../../assets/placeholder.png')}
                />
              )
            );
          }}
          contentStyle={{ padding: 0, margin: 0, top: 0 }}
          titleStyle={styles.listTitle}
          onPress={() => {
            navigation.navigate('AddReminder', {
              action: 'edit',
              ...reminder,
            });
          }}
        />
      );
    });
  } else {
    reminderList = <Text style={styles.emptyReminders}>Nothing here ...</Text>;
  }

  return (
    <View style={[styles.scrollViewContainer, { height }]}>
      <ScrollView style={styles.container}>
        <List.Section style={styles.listSection}>
          <List.Subheader>Your Reminders</List.Subheader>
          {reminderList}
        </List.Section>
      </ScrollView>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => {
          navigation.navigate('AddReminder', {
            action: 'add',
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    width: '100%',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
    paddingLeft: 5,
    paddingRight: 5,
  },
  listSection: { paddingLeft: 5, paddingRight: 5 },
  listTitle: { padding: 0, margin: 0, fontSize: 20, marginTop: 5 },
  listDescription: { fontSize: 15 },
  listSubDescription: { fontSize: 14, fontStyle: 'italic', marginTop: 5 },
  listImage: {
    // borderWidth: 1,
    // borderColor: 'thistle',
    width: '40%',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 50,
    marginBottom: 50,
  },
  emptyReminders: {
    textAlign: 'center',
  },
  refetching: { fontSize: 10, fontStyle: 'italic' },
});

export default RemindersList;
