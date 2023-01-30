import {Provider} from 'react-redux';
import store from '../../../redux/reduxStore/store';
import {NestedCustomHeaderTitle} from './nestedElement/headerTitle/NestedCustomHeaderTitle';

export const CustomHeaderTitle = () => {
  return (
    <Provider store={store}>
      <NestedCustomHeaderTitle />
    </Provider>
  );
};
