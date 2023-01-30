import {ListRenderItemInfo} from 'react-native';
import {IBasketUser} from '../../redux/reduxStateSlice/basketUserSlice';
export interface ICardShop {
  id: string;
  productName: string;
  price: number;
  cofeId: string;
  cofeName: string;
  imagesPath: string;
  count: number;
  prevPrice: number;
}
export type ICardOrder = {
  renderCard: ICardShop;
};
export const createCardShop = (data: ListRenderItemInfo<IBasketUser>) => {
  const cardObject: ICardShop = {
    id: data.item.id,
    productName: data.item.productName,
    price: data.item.price,
    cofeId: data.item.cofeId,
    cofeName: data.item.cofeName,
    imagesPath: data.item.imagesPath,
    count: data.item.count,
    prevPrice: data.item.prevPrice,
  };
  return cardObject;
};
