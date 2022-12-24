import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {FunctionComponent, useState} from 'react';
import rubleIcon from '../../../assets/image/detailScreen/rubleIcon.png';
import heartGrayIcon from '../../../assets/image/detailScreen/heartGrayIcon.png';
import heartIcon from '../../../assets/image/detailScreen/heartIcon.png';
import imageNoCoffe from '../../../assets/image/detailScreen/imageNoCoffe.png';
import {CURENT_WIDTH} from '../../../definitionSize';
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
    width: CURENT_WIDTH,
    height: 270,
    backgroundColor: 'white',
  },
  name: {
    fontSize: 18,
    fontFamily: 'SFUIText-Bold',
    color: '#717171',
    marginTop: 10,
    marginLeft: 10,
  },
  frase: {
    fontSize: 14,
    fontFamily: 'SFUIText-Regular',
    color: '#717171',
    marginTop: 5,
    marginLeft: 10,
  },
  image: {
    width: 150,
    height: 135,
    marginTop: 20,
    marginLeft: 15,
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
    fontFamily: 'Lobster-Regular',
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
