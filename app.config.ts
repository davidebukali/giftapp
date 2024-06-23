import { ExpoConfig, ConfigContext } from 'expo/config';

const PRODUCT_NAME = process.env.EXPO_PUBLIC_PRODUCT_NAME;

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  plugins: [
    [
      'expo-image-picker',
      {
        photosPermission:
          'The app accesses your photos to let you share them with your friends.',
      },
    ],
    [
      'expo-media-library',
      {
        photosPermission: 'Allow Gift App to access your photos.',
        savePhotosPermission: 'Allow Gift App to save photos.',
        isAccessMediaLocationEnabled: true,
      },
    ],
    [
      'expo-location',
      {
        locationAlwaysAndWhenInUsePermission: `Allow ${PRODUCT_NAME} to use your location.`,
      },
    ],
    'expo-asset',
  ],
});
