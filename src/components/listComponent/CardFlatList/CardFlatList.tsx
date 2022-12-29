import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import goIcon from '../../../assets/image/listScreen/goIcon.png';
export const initialState = {
  id: '',
  name: '',
  address: '',
  coordinates: '',
  description: '',
  images: '',
};
export type InState = {
  id: string;
  name: string;
  address: string;
  coordinates: string;
  description: string;
  images: string;
};
// @ts-ignore
export const RenderItem = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.conteiner} onPress={() => onPress}>
      <Image source={{uri: item.images}} style={styles.image} />
      <View style={styles.view}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.adressDesription}>Мы находимся:</Text>
        <Text style={styles.adress}>{item.address}</Text>
        <View style={styles.conteinerGoIcon}>
          <Text style={styles.text}>Подробнее</Text>
          <Image style={styles.icon} source={goIcon} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  conteiner: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: 146,
    height: 146,
  },
  view: {
    height: 146,
    width: 259,
  },
  nameText: {
    color: '#C8D9AF',
    fontSize: 20,
    marginTop: 14,
    marginLeft: 14,
    fontFamily: 'SFUIText-Bold',
    fontWeight: 'bold',
  },
  adressDesription: {
    fontSize: 14,
    marginTop: 15,
    marginLeft: 14,
    color: '#717171',
    fontFamily: 'SFUIText-Light',
  },
  adress: {
    fontSize: 18,
    marginTop: 5,
    marginLeft: 14,
    color: '#717171',
    fontFamily: 'SFUIText-Regular',
  },
  text: {
    marginLeft: 140,
    color: '#BBBBBB',
  },
  conteinerGoIcon: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    width: 32,
    height: 32,
    marginTop: -7,
    marginLeft: -5,
  },
});
