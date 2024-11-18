import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';

const CustomDrawer = (props) => {
  const { user } = useUser();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: '#9288F9',
          marginTop: -50,
          zIndex: 10,
        }}
      >
        <ImageBackground
          source={require('../../../assets/purplemenu.jpg')}
          style={{ padding: 20, paddingBottom: 150 }}
        >
          {user && (
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                margin: 10,
                position: 'absolute',
                bottom: 0,
              }}
            >
              Hello {user.emailAddresses[0].emailAddress}
            </Text>
          )}
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: '#ccc',
        }}
      ></View>
      <View style={{ padding: 20 }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,

                marginLeft: 5,
              }}
            >
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <SignedOut>
          <TouchableOpacity style={{ paddingVertical: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="exit-outline" size={22} />
              <Text
                style={{
                  fontSize: 15,

                  marginLeft: 5,
                }}
              >
                Sign In Here
              </Text>
            </View>
          </TouchableOpacity>
        </SignedOut>
        <SignedIn>
          <TouchableOpacity style={{ paddingVertical: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="exit-outline" size={22} />
              <Text
                style={{
                  fontSize: 15,

                  marginLeft: 5,
                }}
              >
                Sign Out
              </Text>
            </View>
          </TouchableOpacity>
        </SignedIn>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userAvatar: {
    height: 67.5,
    width: 67.5,
    borderRadius: 40,
    marginBottom: 10,
    marginTop: 30,
  },
  switchTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 7,
    paddingVertical: 5,
  },
  preferences: {
    fontSize: 16,
    color: '#ccc',
    paddingTop: 10,
    fontWeight: '500',
    paddingLeft: 20,
  },
  switchText: {
    fontSize: 17,
    color: '',
    paddingTop: 10,
    fontWeight: 'bold',
  },
});
