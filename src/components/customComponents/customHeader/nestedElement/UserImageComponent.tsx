import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {FunctionComponent} from 'react';
import newUserIcon from '../../../../assets/image/stateImageReg/newUser.png';
type ModelUserImage = {
  image: string;
};
export const UserImageComponent: FunctionComponent<ModelUserImage> = ({
  image,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log('Go screen User')}>
      <View style={styles.secondContainer}>
        <View style={styles.roundFirst}>
          <View style={styles.roundSecond}>
            {image != '' && (
              <Image source={{uri: image}} style={styles.userImage} />
            )}
            {image == '' && (
              <Image source={newUserIcon} style={styles.userImage} />
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
    borderColor: 'white',
    width: 134,
    height: 134,
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
});
