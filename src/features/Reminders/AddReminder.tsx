import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add, remove, update } from './reminderSlice';
import uuid from 'react-native-uuid';
import { Formik } from 'formik';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import * as Yup from 'yup';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as FileSystem from 'expo-file-system';
import { ScrollView } from 'react-native-gesture-handler';
import React from 'react';
import {
  useAddReminderMutation,
  useDeleteReminderMutation,
  useUpdateReminderMutation,
} from '../api/apiSlice';
import { DATETIME } from '../../utils/constants';

type ModeType = 'date' | 'time';

const AddReminderSchema = Yup.object().shape({
  names: Yup.string().required('Required'),
  remindertype: Yup.string().required('Required'),
});

const AddReminder = () => {
  const { params } = useRoute();
  const [image, setImage] = useState('');
  const dispatch = useDispatch();
  const [date, setDate] = useState(
    params?.date ? new Date(params?.date) : new Date(),
  );
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState<ModeType>('date');
  const [addReminder] = useAddReminderMutation();
  const [deleteReminder] = useDeleteReminderMutation();
  const [updateReminder] = useUpdateReminderMutation();
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text style={styles.header}>
          {params?.action === 'edit' ? 'Edit Reminder' : 'Add Reminder'}
        </Text>
      ),
    });
  }, [navigation]);

  React.useEffect(() => {
    if (params?.image) {
      setImage(params?.image);
    }
  }, [params?.image]);

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
    let options = { encoding: FileSystem.EncodingType.Base64 };
    let base64 = await FileSystem.readAsStringAsync(imageUri, options);
    setImage('data:image/jpeg;base64,' + base64);
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <Formik
        initialValues={{
          names: params?.names,
          remindertype: params?.eventtype,
          phone: params?.phone,
        }}
        validationSchema={AddReminderSchema}
        onSubmit={({ names, remindertype, phone }) => {
          const payload = {
            names,
            date: format(new Date(date), DATETIME),
            phone,
            image: image ? image : '',
            eventtype: remindertype,
          };

          if (params?.action === 'edit') {
            updateReminder({ id: params?.id, patch: payload });
          } else {
            try {
              addReminder({ id: uuid.v4() as string, ...payload });
            } catch (err) {
              console.error('Failed to add a reminder', err);
            }
          }

          navigation.navigate('Home');
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, errors, values }) => (
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
              value={values.names}
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
              value={values.remindertype}
            />
            <TextInput
              mode="outlined"
              inputMode="numeric"
              label="Phone (Optional)"
              placeholder="Contact for delivery"
              style={styles.input}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
            />
            {params?.action === 'edit' && (
              <View style={styles.btnContainer}>
                <Button
                  mode="contained"
                  onPress={handleSubmit}
                  style={styles.editBtn}
                  icon="pencil"
                >
                  Edit
                </Button>
                <Button
                  mode="contained"
                  onPress={() => {
                    deleteReminder({ id: params?.id });
                    navigation.navigate('Home');
                  }}
                  style={styles.deleteBtn}
                  icon="delete"
                >
                  Delete
                </Button>
              </View>
            )}
            {params?.action === 'add' && (
              <Button
                mode="contained"
                onPress={handleSubmit}
                style={styles.submitBtn}
              >
                Add
              </Button>
            )}
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#fff',
    width: '100%',
  },
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
    marginBottom: 10,
  },
  datetext: {
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
  },
  header: {
    fontSize: 20,
    fontWeight: '500',
  },
  btnContainer: {
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  submitBtn: {
    padding: 5,
  },
  editBtn: {
    width: '45%',
    margin: 5,
    padding: 5,
  },
  deleteBtn: {
    width: '45%',
    margin: 5,
    padding: 5,
  },
});

export default AddReminder;
