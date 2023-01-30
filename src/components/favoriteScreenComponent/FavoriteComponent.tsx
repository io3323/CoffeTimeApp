import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reduxStore/store';
import {useEffect} from 'react';
import {cloneMassive} from '../../redux/reduxStateSlice/favoriteScreenSlice';
import {BackgroundComponent} from './nestedElement/BackgroundComponent';
import {light} from '../../themeNameApp';
import {FavoriteFlatList} from './nestedElement/FavoriteFlatList';

export const FavoriteComponent = () => {
  const favoriteScreenState = useSelector(
    (state: RootState) => state.favoriteScreenState,
  );
  const themeState = useSelector((state: RootState) => state.themeState);
  const dispatch = useDispatch();
  const favoriteProductState = useSelector(
    (state: RootState) => state.favoriteProductState,
  );
  useEffect(() => {
    dispatch(cloneMassive(favoriteProductState));
  }, [favoriteProductState]);
  return (
    <View
      style={[
        styles.mainConteiner,
        themeState.theme == light ? styles.colorLight : styles.colorDark,
      ]}>
      {favoriteScreenState.length == 0 && <BackgroundComponent />}
      {favoriteScreenState.length > 0 && <FavoriteFlatList />}
    </View>
  );
};
const styles = StyleSheet.create({
  mainConteiner: {
    width: '100%',
    height: '100%',
  },
  colorLight: {
    backgroundColor: '#f2f2f2',
  },
  colorDark: {
    backgroundColor: '#534965',
  },
});
