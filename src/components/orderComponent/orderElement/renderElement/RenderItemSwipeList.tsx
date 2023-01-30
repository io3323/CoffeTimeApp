import {CardShop} from '../../customElement/CardShop';
import {createCardShop} from '../../../../externalFunctions/orderScreen/createCardShop';
import {ListRenderItemInfo} from 'react-native';
import {IBasketUser} from '../../../../redux/reduxStateSlice/basketUserSlice';
import {FC} from 'react';
type RenderItemSwipeListModel = {
  data: ListRenderItemInfo<IBasketUser>;
};
export const RenderItemSwipeList: FC<RenderItemSwipeListModel> = props => {
  return <CardShop renderCard={createCardShop(props.data)} />;
};
