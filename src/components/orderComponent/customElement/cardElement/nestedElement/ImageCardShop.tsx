import {Image, StyleSheet, View} from 'react-native';
import imageNoCoffe from '../../../../../assets/image/detailScreen/imageNoCoffe.png';
import {FC, useState} from 'react';

type ImageCardShopModel = {
  image: string;
};
export const ImageCardShop: FC<ImageCardShopModel> = ({image}) => {
  const [controller, setController] = useState(true);
  return (
    <View style={styles.imageContainer}>
      {controller && (
        <Image
          source={{uri: image}}
          style={styles.productImage}
          onError={() => setController(false)}
        />
      )}
      {!controller && (
        <Image source={imageNoCoffe} style={styles.productImage} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {justifyContent: 'center', alignItems: 'center'},
  productImage: {
    width: 125,
    height: 125,
    borderRadius: 10,
  },
});
