import {FlatList, ListRenderItem, Platform} from 'react-native';
import {Separator} from '../../listComponent/Separator/Separator';
import {HeaderComponent} from './HeaderComponent';
import {FooterComponent} from './FooterComponent';
import {IProductCafeModel} from '../../../redux/reduToolKitQuery/interfacesCoffeData';
import {FavoriteRenderAndroid} from './FavoriteRenderAndroid';
import {FavoriteRenderIOS} from './FavoriteRenderIOS';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';

export const FavoriteFlatList = () => {
  const favoriteRenderAndroid: ListRenderItem<IProductCafeModel> = ({item}) => {
    return <FavoriteRenderAndroid item={item} />;
  };
  const favoriteRenderIOS: ListRenderItem<IProductCafeModel> = ({item}) => {
    return <FavoriteRenderIOS item={item} />;
  };
  const favoriteScreenState = useSelector(
    (state: RootState) => state.favoriteScreenState,
  );
  return (
    <FlatList
      data={favoriteScreenState}
      renderItem={
        Platform.OS === 'ios' ? favoriteRenderIOS : favoriteRenderAndroid
      }
      horizontal={false}
      numColumns={2}
      ItemSeparatorComponent={Separator}
      ListHeaderComponent={HeaderComponent}
      ListFooterComponent={FooterComponent}
    />
  );
};
