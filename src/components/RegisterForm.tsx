import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useState} from 'react';
// @ts-ignore
import newUserIcon from '../assets/image/stateImageReg/newUser.png';
// @ts-ignore
import pencilIcon from '../assets/image/regImageScreen/pencilIcon.png';
const RegisterForm = () => {
  const [name, setName] = useState('');
  const [controller, setController] = useState(true);
  const [photo, setPhoto] = useState('');
  const openCamera = () => {
    const options = {
      noData: true,
    };
    // @ts-ignore
    launchImageLibrary(options, response => {
      console.log('response First', response);
      console.log('response assets', response.assets);
      response.assets?.map(photoLib => {
        console.log(photoLib.uri);
        // @ts-ignore
        setPhoto(photoLib.uri);
        setController(false);
      });
    });
  };
  return (
    <View>
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
      <View style={styles.formContainer}>
        <View style={styles.inputConteiner}>
          <TextInput
            placeholder={'Name and surname'}
            placeholderTextColor={'#FFFFFFB5'}
            cursorColor={'#FFFFFFB5'}
            style={styles.input}
            onChangeText={text => setName(text)}
          />
        </View>
        <TouchableOpacity onPress={() => console.log(name)}>
          <Image style={styles.pencilIcon} source={pencilIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <TouchableOpacity style={styles.buttonLogin}>
        <Text style={styles.buttonTextLogin}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: 'white',
    width: 134,
    height: 134,
    marginTop: 48,
    marginLeft: 121,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondContainer: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: 'white',
    width: 128,
    height: 128,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundFirst: {
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 200,
    width: 134,
    height: 134,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundSecond: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'white',
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
  input: {
    fontSize: 20,
    marginTop: 80,
    marginLeft: 85,
    color: '#FFFFFFB5',
  },
  line: {
    width: 250,
    height: 1,
    marginLeft: 65.5,
    marginTop: 10,
    backgroundColor: '#D8D8D8',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 100,
  },
  pencilIcon: {
    width: 41,
    height: 39,
    marginTop: 63,
    marginLeft: 20,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#D8D8D8',
  },
  buttonLogin: {
    marginTop: 23.5,
    borderStyle: 'solid',
    borderRadius: 40,
    backgroundColor: '#C8D9AF',
    borderColor: '#C8D9AF',
    borderWidth: 1,
    width: 300,
    height: 52,
    marginLeft: 38,
  },
  buttonTextLogin: {
    fontSize: 18,
    fontFamily: 'Helvetica',
    color: 'white',
    textAlign: 'center',
    marginTop: 15,
  },
  inputConteiner: {
    width: 260,
  },
});
export default RegisterForm;
