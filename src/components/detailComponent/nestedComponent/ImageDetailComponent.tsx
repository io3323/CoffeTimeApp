import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {FunctionComponent, useState} from 'react';
import heartIcon from '../../../assets/image/detailScreen/heartIcon.png';
import cafeIcon from '../../../assets/image/listScreen/cafeIcon.png';
type ImageComponentType = {
  images: string;
  name: string;
  address: string;
};
export const ImageDetailComponent: FunctionComponent<ImageComponentType> = ({
  images,
  name,
  address,
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [controller, setController] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.mainConteiner}>
      {controller && (
        <ImageBackground
          style={styles.image}
          source={{uri: images}}
          onError={() => setController(false)}>
          <LinearGradient
            colors={['rgba(0,0,0,0.00)', 'rgba(243,233,216,0.79)']}
            style={styles.linearGradient}>
            <View style={styles.conteiner}>
              <View style={styles.mainBlockConteiner}>
                <Text style={styles.textName}>{name}</Text>
                <Text style={styles.textAdress}>{address}</Text>
              </View>
              <Switch
                trackColor={{false: '#767577', true: '#f3f1f1'}}
                thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={styles.switchController}
              />
              {isEnabled && (
                <Image source={heartIcon} style={styles.headrIcon} />
              )}
            </View>
          </LinearGradient>
        </ImageBackground>
      )}
      {controller == false && (
        <ImageBackground style={styles.image} source={cafeIcon}>
          <LinearGradient
            colors={['rgba(0,0,0,0.00)', 'rgba(243,233,216,0.79)']}
            style={styles.linearGradient}>
            <View style={styles.conteiner}>
              <View style={styles.mainBlockConteiner}>
                <Text style={styles.textName}>{name}</Text>
                <Text style={styles.textAdress} numberOfLines={0}>
                  {address}
                </Text>
              </View>
              <Switch
                trackColor={{false: '#767577', true: '#f3f1f1'}}
                thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={styles.switchController}
              />
              {isEnabled && (
                <Image source={heartIcon} style={styles.headrIcon} />
              )}
            </View>
          </LinearGradient>
        </ImageBackground>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainConteiner: {
    width: '100%',
    height: 320,
  },
  mainBlockConteiner: {
    width: '85%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 0,
  },
  textName: {
    fontFamily: 'Lobster-Regular',
    fontSize: 28,
    color: '#474747',
    marginTop: 220,
    marginLeft: 6,
  },
  textAdress: {
    fontFamily: 'SFUIText-Regular',
    fontSize: 18,
    color: '#717171',
    marginLeft: 6,
    marginTop: 10,
    height: 100,
  },
  conteiner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  switchController: {
    marginLeft: 10,
    borderWidth: 2,
    marginBottom: 50,
    borderStyle: 'solid',
    borderColor: '#d5d4d4',
    borderRadius: 14,
    backgroundColor: Platform.OS == 'ios' ? '#cccccc' : '',
  },
  headrIcon: {
    width: 20,
    height: 18,
    marginTop: 293,
    marginLeft: -25,
  },
});
