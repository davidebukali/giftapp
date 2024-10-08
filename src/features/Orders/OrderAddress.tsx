import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { Button, Snackbar, TextInput } from 'react-native-paper';
import { ExpoLeaflet } from 'expo-leaflet';
import * as Location from 'expo-location';
import { MapLayer } from 'expo-leaflet';
import { useState, useEffect } from 'react';
import { LatLngLiteral } from 'leaflet';
import { MapMarker } from 'expo-leaflet';
import { Formik } from 'formik';
import { ZOOM } from '../../utils/constants';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateDeliveryDetails } from './orderSlice';
import { selectOrderAddress } from '../Orders/orderSlice';

const mapLayers: Array<MapLayer> = [
  {
    baseLayerIsChecked: true,
    baseLayer: true,
    baseLayerName: 'Mapbox',
    layerType: 'TileLayer',
    url: `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGF2aWRzZXJlbmUiLCJhIjoiUkJkd1hGWSJ9.SCxMvCeeovv99ZDnpfpNwA`,
  },
];

const mapOptions = {
  attributionControl: false,
  zoomControl: Platform.OS === 'web',
};

//Kampala City
const initialPosition = {
  lat: 0.3145562,
  lng: 32.578862,
};

const AddressSchema = Yup.object().shape({
  additional_information: Yup.string().required('Required'),
});

const OrderAddress = ({ navigation }) => {
  const orderAddress = useSelector(selectOrderAddress);
  const [additionalInformation, setAdditionalInformation] = useState('');
  const [visible, setVisible] = useState(false);
  const [mapCenterPosition, setMapCenterPosition] = useState(
    orderAddress || initialPosition,
  );
  const [ownPosition, setOwnPosition] = useState<null | LatLngLiteral>(null);
  const dispatch = useDispatch();
  const [mapMarkers, setMapMarkers] = useState<MapMarker[]>(
    'lat' in orderAddress
      ? [
          {
            id: '1',
            position: orderAddress,
            icon: '📍',
            size: [36, 36],
          },
        ]
      : [],
  );

  useEffect(() => {
    const getLocationAsync = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.warn('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      if (!ownPosition) {
        setOwnPosition({
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        });
      }
    };

    getLocationAsync().catch((error) => {
      console.error(error);
    });
  }, []);

  const onSaveaddress = () => {
    if (mapMarkers.length > 0) {
      dispatch(
        updateDeliveryDetails({
          additionalInformation,
          deliveryCoordinates: mapMarkers[0]['position'],
        }),
      );
      navigation.navigate('Cart');
    } else {
      setVisible(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 3, position: 'relative' }}>
        <Text style={styles.headerText}>
          Add a marker for the delivery address
        </Text>
        <ExpoLeaflet
          loadingIndicator={() => <ActivityIndicator />}
          mapCenterPosition={mapCenterPosition}
          mapLayers={mapLayers}
          mapMarkers={mapMarkers}
          mapOptions={mapOptions}
          maxZoom={20}
          onMessage={(message) => {
            switch (message.tag) {
              case 'onMapClicked':
                setMapMarkers([
                  {
                    id: '1',
                    position: {
                      lat: message.location.lat,
                      lng: message.location.lng,
                    },
                    icon: '📍',
                    size: [36, 36],
                  },
                ]);
                break;
              case 'onMoveEnd':
                setMapCenterPosition(message.mapCenter);
                break;
              default:
                if (['onMove'].includes(message.tag)) {
                  return;
                }
            }
          }}
          zoom={ZOOM}
        />
      </View>

      <View style={styles.mapAddress}>
        <TextInput
          mode="outlined"
          label="Additional information"
          onChangeText={(text) => setAdditionalInformation(text)}
          value={additionalInformation}
          numberOfLines={5}
        />
        <TextInput
          mode="outlined"
          value={
            mapMarkers.length > 0
              ? JSON.stringify(mapMarkers[0]['position'])
              : ''
          }
          style={{ display: 'none', marginTop: 20 }}
        />
        <Button
          mode="contained"
          onPress={onSaveaddress}
          style={styles.saveAddress}
        >
          Save address
        </Button>
      </View>
      <Snackbar
        visible={visible}
        onDismiss={() => {}}
        action={{
          label: 'Close',
          onPress: () => {
            setVisible(!visible);
          },
        }}
      >
        Select an address on the map
      </Snackbar>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 14,
    fontWeight: '400',
    padding: 20,
  },
  mapControls: {
    backgroundColor: 'rgba(255,255,255,.5)',
    borderRadius: 5,
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 0,
    marginHorizontal: 10,
    padding: 7,
    position: 'absolute',
    right: 0,
  },
  mapButton: {
    alignItems: 'center',
    height: 42,
    justifyContent: 'center',
    width: 42,
  },
  mapAddress: {
    flex: 1,
    padding: 10,
  },
  saveAddress: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default OrderAddress;
