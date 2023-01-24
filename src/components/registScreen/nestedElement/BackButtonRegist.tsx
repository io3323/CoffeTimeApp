import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import backIcon from '../../../assets/image/regImageScreen/backIcon.png';
import {useNavigation} from '@react-navigation/native';

export const BackButtonRegist = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.backIconConteiner}
      onPress={() => navigation.goBack()}>
      <Image source={backIcon} style={styles.backIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    width: 30,
    height: 30,
  },
  backIconConteiner: {
    marginTop: 5,
    marginLeft: 10,
  },
});
