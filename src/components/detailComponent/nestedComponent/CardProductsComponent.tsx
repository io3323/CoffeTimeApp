import {Image, StyleSheet, Text, View} from 'react-native';
import {FunctionComponent, useState} from 'react';
// @ts-ignore
import rubleIcon from '../../../assets/image/detailScreen/rubleIcon.png';
// @ts-ignore
import heartGrayIcon from '../../../assets/image/detailScreen/heartGrayIcon.png';
// @ts-ignore
import heartIcon from '../../../assets/image/detailScreen/heartIcon.png';
// @ts-ignore
import imageNoCoffe from '../../../assets/image/detailScreen/imageNoCoffe.png';
type CartProductsType = {
  name: string;
  images: string;
  price: number;
  favorite: boolean;
};
export const CardProductsComponent: FunctionComponent<CartProductsType> = ({
  name,
  images,
  price,
  favorite,
}) => {
  const [controller, setController] = useState(true);
  return (
    <View style={styles.conteiner}>
      <View style={styles.textConteiner}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.frase}>кофейный напиток</Text>
      </View>
      {controller && (
        <Image
          source={{uri: images}}
          style={styles.image}
          onError={() => setController(false)}
        />
      )}
      {controller == false && (
        <Image source={imageNoCoffe} style={styles.image} />
      )}
      <View style={styles.secondConteiner}>
        <Text style={styles.price}>{price}</Text>
        <Image source={rubleIcon} style={styles.rubleIcon} />
        {favorite && <Image source={heartIcon} style={styles.heartIcon} />}
        {favorite == false && (
          <Image source={heartGrayIcon} style={styles.heartIcon} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    width: 180,
    height: 270,
    backgroundColor: 'white',
  },
  name: {
    fontSize: 18,
    fontFamily: 'Helvetica',
    color: '#717171',
    marginTop: 10,
    marginLeft: 10,
  },
  frase: {
    fontSize: 14,
    fontFamily: 'Helvetica',
    color: '#717171',
    marginTop: 5,
    marginLeft: 10,
  },
  image: {
    width: 155,
    height: 140,
    marginTop: 10,
    marginLeft: 10,
  },
  secondConteiner: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 10,
  },
  price: {
    fontSize: 25,
    color: '#C8D9AF',
  },
  rubleIcon: {
    marginTop: 4,
    width: 23,
    height: 23,
  },
  heartIcon: {
    marginLeft: 83,
    marginTop: 1,
    width: 30,
    height: 30,
  },
  textConteiner: {
    width: '100%',
    height: 65,
  },
});
