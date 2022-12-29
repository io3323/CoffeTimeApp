import {Image, StyleSheet, Text, View} from 'react-native';
import {FunctionComponent, useState} from 'react';
import rubleIcon from '../../../assets/image/detailScreen/rubleIcon.png';
import heartGrayIcon from '../../../assets/image/detailScreen/heartGrayIcon.png';
import heartIcon from '../../../assets/image/detailScreen/heartIcon.png';
import imageNoCoffe from '../../../assets/image/detailScreen/imageNoCoffe.png';
import {WIDTH_APP} from '../../../definitionSize';
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
      <View>
        <View style={styles.imageConteiner}>
          {controller && (
            <Image
              source={{uri: images}}
              style={styles.image}
              onError={() => setController(false)}
            />
          )}
        </View>
        <View style={styles.imageConteiner}>
          {controller == false && (
            <Image source={imageNoCoffe} style={styles.image} />
          )}
        </View>
      </View>
      <View style={styles.secondConteiner}>
        <View style={styles.priceConteiner}>
          <Text style={styles.price}>{price}</Text>
          <Image source={rubleIcon} style={styles.rubleIcon} />
        </View>
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
    width: WIDTH_APP * 0.45,
    height: 270,
    backgroundColor: 'white',
    justifyContent: 'space-between',
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
  imageConteiner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 135,
  },
  secondConteiner: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  priceConteiner: {
    flexDirection: 'row',
  },
  price: {
    fontSize: 25,
    color: '#C8D9AF',
    fontFamily: 'Lobster-Regular',
    marginLeft: 8,
    marginBottom: 8,
  },
  rubleIcon: {
    width: 12,
    height: 19,
    marginTop: 6,
    marginLeft: 8,
  },
  heartIcon: {
    marginRight: 8,
    marginBottom: 12,
    width: 30,
    height: 30,
  },
  textConteiner: {
    width: '100%',
    height: 65,
  },
});
