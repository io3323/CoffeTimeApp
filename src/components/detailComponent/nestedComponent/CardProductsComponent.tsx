import {StyleSheet, View} from 'react-native';
import {FunctionComponent} from 'react';
import {WIDTH_APP} from '../../../definitionSize';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {light} from '../../../themeNameApp';
import {IProductCafeModel} from '../../../redux/reduToolKitQuery/interfacesCoffeData';
import {Color} from '../../../Color';
import {NameCardProductComponent} from './cardElement/NameCardProductComponent';
import {ImageCardProductComponent} from './cardElement/ImageCardProductComponent';
import {PriceCardProductComponent} from './cardElement/PriceCardProductComponent';
import {FavoriteButtonCardProductComponent} from './cardElement/FavoriteButtonCardProductComponent';
type CardProductType = {
  cardProductInfo: IProductCafeModel;
};
export const CardProductsComponent: FunctionComponent<
  CardProductType
> = props => {
  const {name, imagesPath, price} = props.cardProductInfo;
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View
      style={
        themeState.theme == light ? styles.containerLight : styles.containerDark
      }>
      <NameCardProductComponent name={name} />
      <ImageCardProductComponent imagesPath={imagesPath} />
      <View style={styles.secondContainer}>
        <PriceCardProductComponent price={price} />
        <FavoriteButtonCardProductComponent item={props.cardProductInfo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerLight: {
    width: WIDTH_APP * 0.45,
    height: 270,
    backgroundColor:
      Color.detailColorObject.cardProductComponent.container.light,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerDark: {
    width: WIDTH_APP * 0.45,
    height: 270,
    backgroundColor:
      Color.detailColorObject.cardProductComponent.container.dark,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secondContainer: {
    width: '100%',
    height: '15%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
