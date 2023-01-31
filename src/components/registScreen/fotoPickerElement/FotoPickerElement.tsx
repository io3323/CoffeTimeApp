import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import newUserIcon from '../../../assets/image/stateImageReg/newUser.png';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addUserImageProfile} from '../../../redux/reduxStateSlice/userInfoSlice';
import {Color} from '../../../Color';

const {color} = Color.regComponent.photoPickerColor;
export const FotoPickerElement = () => {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState<string | undefined>('');
  const [controller, setController] = useState(true);
  const openCamera = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, response => {
      response.assets?.map(photoLib => {
        setPhoto(photoLib.uri);
        dispatch(addUserImageProfile({userImage: photoLib.uri}));
        setController(false);
      });
    });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={() => openCamera()}>
      <View style={styles.secondContainer}>
        <View style={styles.roundFirst}>
          <View style={styles.roundSecond}>
            {controller && (
              <Image source={newUserIcon} style={styles.initialImage} />
            )}
            {photo !== '' && (
              <Image source={{uri: photo}} style={styles.userImage} />
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: color,
    width: 134,
    height: 134,
    marginTop: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondContainer: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: color,
    width: 128,
    height: 128,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundFirst: {
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: color,
    borderRadius: 200,
    width: 134,
    height: 134,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundSecond: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: color,
    borderRadius: 200,
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initialImage: {
    width: 90,
    height: 90,
  },
  userImage: {
    width: 114,
    height: 114,
    borderRadius: 100,
  },
});
