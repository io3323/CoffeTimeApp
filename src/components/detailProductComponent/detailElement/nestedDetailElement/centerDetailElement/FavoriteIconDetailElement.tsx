import {addFavoriteProduct} from '../../../../../redux/reduxStateSlice/favoriteProductSlice';
import {createFavoriteProduct} from '../../../../../externalFunctions/favoriteScreen/createFavoriteProduct';
import {updateIncludeFunction} from '../../../../../externalFunctions/favoriteScreen/updateIncludeFunction';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import heartIcon from '../../../../../assets/image/detailScreen/heartIcon.png';
import heartGrayIcon from '../../../../../assets/image/detailScreen/heartGrayIcon.png';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';

export const FavoriteIconDetailElement = () => {
  const dispatch = useDispatch();
  const infoProductCoffeeState = useSelector(
    (state: RootState) => state.infoProductCoffeState,
  );
  const favoriteProductState = useSelector(
    (state: RootState) => state.favoriteProductState,
  );
  const {id} = infoProductCoffeeState;
  return (
    <TouchableOpacity
      onPress={() =>
        dispatch(
          addFavoriteProduct(createFavoriteProduct(infoProductCoffeeState)),
        )
      }>
      {updateIncludeFunction(id, favoriteProductState) && (
        <Image source={heartIcon} style={styles.heartIconActive} />
      )}
      {updateIncludeFunction(id, favoriteProductState) === false && (
        <Image source={heartGrayIcon} style={styles.heartIconNotActive} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  heartIconNotActive: {
    width: 30,
    height: 30,
    marginLeft: 5,
    marginTop: 2,
  },
  heartIconActive: {
    width: 20,
    height: 18,
    marginLeft: 10,
    marginTop: 8,
  },
});
