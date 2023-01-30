import {StyleSheet, View} from 'react-native';
import {ImageCardShop} from './ImageCardShop';
import {TextProductOrderComponent} from './TextProductOrderComponent';
import {DeleteButtonComponent} from './DeleteButtonComponent';
import {ShopDescriptionComponent} from './ShopDescriptionComponent';
import {CoffeNameShopComponent} from './CoffeNameShopComponent';
import {PriceDescriptionComponent} from './PriceDescriptionComponent';
import {PriceShopComponent} from './PriceShopComponent';
import {RubleIconComponent} from './RubleIconComponent';
import {PayShopButtonComponent} from './PayShopButtonComponent';
import {ICardShop} from '../../../../../externalFunctions/orderScreen/createCardShop';
import {FC} from 'react';
type AnimatedCardShopType = {
  item: ICardShop;
};
export const CardShopElement: FC<AnimatedCardShopType> = ({item}) => {
  const {id, imagesPath, productName, cofeName, price, count} = item;
  return (
    <View style={[styles.conteiner]}>
      <ImageCardShop image={imagesPath} />
      <View style={styles.blockConteiner}>
        <View style={styles.conteinerVertical}>
          <View style={styles.textPodunctConteinerDelete}>
            <TextProductOrderComponent productName={productName} />
            <DeleteButtonComponent id={id} />
          </View>
          <ShopDescriptionComponent />
          <CoffeNameShopComponent coffeName={cofeName} />
          <View style={styles.conteinerPrice}>
            <PriceDescriptionComponent />
            <PriceShopComponent price={price} />
            <RubleIconComponent />
            <PayShopButtonComponent count={count} item={{renderCard: item}} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteinerMainLight: {
    width: 370,
    height: 131,
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 10,
  },
  conteinerMainDark: {
    width: 370,
    height: 131,
    backgroundColor: '#6f6483',
    marginTop: 20,
    borderRadius: 10,
  },
  conteinerVertical: {
    display: 'flex',
    flexDirection: 'column',
  },
  conteinerPrice: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'flex-end',
  },
  textPodunctConteinerDelete: {
    display: 'flex',
    flexDirection: 'row',
    width: 235,
    height: 30,
  },
  image: {
    width: 30,
    height: 30,
  },
  conteiner: {
    display: 'flex',
    flexDirection: 'row',
  },
  blockConteiner: {
    marginLeft: 10,
  },
});
