import {Provider} from 'react-redux';
import store from '../../redux/reduxStore/store';
import {FavoriteComponent} from '../../components/favoriteScreenComponent/FavoriteComponent';

export const FavoriteCoffeScreen = () => {
  return (
    <Provider store={store}>
      <FavoriteComponent />
    </Provider>
  );
};
