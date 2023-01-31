import {FC} from 'react';
import {addFavoriteProduct} from '../../../../redux/reduxStateSlice/favoriteProductSlice';
import {updateIncludeFunction} from '../../../../externalFunctions/favoriteScreen/updateIncludeFunction';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import heartGrayIcon from '../../../../assets/image/detailScreen/heartGrayIcon.png';
import heartIcon from '../../../../assets/image/detailScreen/heartIcon.png';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {IProductCafeModel} from '../../../../redux/reduToolKitQuery/interfacesCoffeData';

type FavoriteButtonCardProductComponent = {
  item: IProductCafeModel;
};
export const FavoriteButtonCardProductComponent: FC<
  FavoriteButtonCardProductComponent
> = ({item}) => {
  const dispatch = useDispatch();
  const favoriteProductState = useSelector(
    (state: RootState) => state.favoriteProductState,
  );
  const {id, price, favorite, cofeId, name, imagesPath} = item;
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(
          addFavoriteProduct({
            id: id,
            name: name,
            imagesPath: imagesPath,
            price: price,
            favorite: favorite,
            cofeId: cofeId,
          }),
        );
      }}>
      {!updateIncludeFunction(id, favoriteProductState) && (
        <Image source={heartGrayIcon} style={styles.heartIconNotActive} />
      )}
      {updateIncludeFunction(id, favoriteProductState) && (
        <Image source={heartIcon} style={styles.heartIconActive} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  heartIconNotActive: {
    marginRight: 8,
    marginBottom: 12,
    width: 30,
    height: 30,
  },
  heartIconActive: {
    marginRight: 11,
    marginBottom: 16,
    width: 22,
    height: 20,
  },
});
