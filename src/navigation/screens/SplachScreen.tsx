import {StyleSheet, View} from 'react-native';
import {Splash} from '../../components/splashScreenComponent/Splach';
export const SplachScreen = () => {
  return (
    <View style={styles.mainConteiner}>
      <Splash />
    </View>
  );
};

const styles = StyleSheet.create({
  mainConteiner: {width: '100%', height: '100%', backgroundColor: '#d0c0b0'},
});
