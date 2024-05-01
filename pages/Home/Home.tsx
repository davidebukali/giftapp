import { StyleSheet, View } from 'react-native';
import RemindersList from '../../Features/Reminders/RemindersList';

const Home = ({ navigation }) => {
  return <RemindersList nav={navigation} />;
};

export default Home;
