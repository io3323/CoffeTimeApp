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
    <View style={[styles.container]}>
      <ImageCardShop image={imagesPath} />
      <View style={styles.blockContainer}>
        <View style={styles.containerVertical}>
          <View style={styles.textProductContainerDelete}>
            <TextProductOrderComponent productName={productName} />
            <DeleteButtonComponent id={id} />
          </View>
          <ShopDescriptionComponent />
          <CoffeNameShopComponent coffeName={cofeName} />
          <View style={styles.containerPrice}>
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
  containerVertical: {
    display: 'flex',
    flexDirection: 'column',
  },
  containerPrice: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'flex-end',
  },
  textProductContainerDelete: {
    display: 'flex',
    flexDirection: 'row',
    width: 235,
    height: 30,
  },
  image: {
    width: 30,
    height: 30,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  blockContainer: {
    marginLeft: 10,
  },
});
