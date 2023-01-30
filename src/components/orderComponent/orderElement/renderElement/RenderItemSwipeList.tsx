import {CardShop} from '../../customElement/CardShop';
import {createCardShop} from '../../../../externalFunctions/orderScreen/createCardShop';
import {ListRenderItemInfo} from 'react-native';
import {IBasketUser} from '../../../../redux/reduxStateSlice/basketUserSlice';
import {FC, Ref} from 'react';
type RenderItemSwipeListModel = {
  data: ListRenderItemInfo<IBasketUser>;
  simultaneousHandlers: Ref<unknown>;
};
export const RenderItemSwipeList: FC<RenderItemSwipeListModel> = props => {
  return (
    <CardShop
      renderCard={createCardShop(props.data)}
      simultaneousHandlers={props.simultaneousHandlers}
    />
  );
};
