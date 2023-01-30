import {Provider} from 'react-redux';
import store from '../../../redux/reduxStore/store';
import {DrawerNestedCompinent} from './nestedElement/drawer/DrawerNestedCompinent';

export const CustomDrawer = () => {
  return (
    <Provider store={store}>
      <DrawerNestedCompinent />
    </Provider>
  );
};
