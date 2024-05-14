import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from './reminderSlice';
import uuid from 'react-native-uuid';
import { Formik } from 'formik';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import * as FileSystem from 'expo-file-system';
import { ScrollView } from 'react-native-gesture-handler';

type ModeType = 'date' | 'time';

const AddReminderSchema = Yup.object().shape({
  names: Yup.string().required('Required'),
  remindertype: Yup.string().required('Required'),
});

const AddReminder = () => {
  const [image, setImage] = useState('');
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState<ModeType>('date');
  const navigation = useNavigation();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      saveBase64Image(result.assets[0].uri);
    }
  };

  const handleDateChange = (_event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const toggleDatetimePicker = (modeValue: ModeType) => {
    setShow(true);
    setMode(modeValue);
  };

  const saveBase64Image = async (imageUri: string) => {
    let getInfo = await FileSystem.getInfoAsync(imageUri);
    let options = { encoding: FileSystem.EncodingType.Base64 };
    let base64 = await FileSystem.readAsStringAsync(imageUri, options);
    setImage('data:image/jpeg;base64,' + base64);
  };

  return (
    <ScrollView>
      <Formik
        initialValues={{ names: '', remindertype: '', phone: '' }}
        validationSchema={AddReminderSchema}
        onSubmit={({ names, remindertype, phone }) => {
          dispatch(
            add({
              id: uuid.v4() as string,
              names,
              date: date.toString(),
              phone,
              image: image ? image : '',
              eventtype: remindertype,
            }),
          );
          navigation.navigate('Home');
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, errors, touched }) => (
          <View style={styles.container}>
            <Pressable onPress={pickImage}>
              {image ? (
                <Image source={{ uri: image }} style={styles.galleryimage} />
              ) : (
                <Image
                  source={require('../../../assets/placeholder.png')}
                  style={styles.defaultimage}
                />
              )}
            </Pressable>
            <TextInput
              mode="outlined"
              label="Names"
              placeholder="Who is the gift for ?"
              style={styles.input}
              onChangeText={handleChange('names')}
              onBlur={handleBlur('names')}
              error={!!errors.names}
            />
            <View
              style={[
                {
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                },
              ]}
            >
              <Button
                icon="calendar"
                mode="outlined"
                onPress={() => toggleDatetimePicker('date')}
                style={styles.datebtn}
              >
                Set Date
              </Button>
              <Text style={styles.datetext}>{format(date, 'PPPP')}</Text>
            </View>
            <View
              style={[
                {
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                  marginBottom: 5,
                },
              ]}
            >
              <Button
                icon="clock"
                mode="outlined"
                onPress={() => toggleDatetimePicker('time')}
                style={styles.datebtn}
              >
                Set Time
              </Button>
              <Text style={styles.datetext}>{format(date, 'p')}</Text>
            </View>
            {show && (
              <DateTimePicker
                mode={mode}
                value={date}
                is24Hour={true}
                onChange={handleDateChange}
              />
            )}
            <TextInput
              mode="outlined"
              label="Type of reminder"
              placeholder="Could be a Birthday, Anniversary or Baptism"
              style={styles.input}
              onChangeText={handleChange('remindertype')}
              onBlur={handleBlur('remindertype')}
              error={!!errors.remindertype}
            />
            <TextInput
              mode="outlined"
              inputMode="numeric"
              label="Phone"
              placeholder="Phone number "
              style={styles.input}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
            />
            <Button mode="contained" onPress={handleSubmit}>
              Save
            </Button>
          </View>
        )}
      </Formik>
    </ScrollView>
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
  defaultimage: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
  },
  galleryimage: {
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 300,
    width: 300,
  },
  datebtn: {
    width: '30%',
  },
  datetext: {
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
  },
});

export default AddReminder;
