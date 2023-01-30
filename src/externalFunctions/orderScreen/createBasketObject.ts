import {IBasketUser} from '../../redux/reduxStateSlice/basketUserSlice';
import {IBasketObject} from '../../redux/reduxStateSlice/basketObjectSlice';
import {IProductFullInfo} from '../../redux/reduToolKitQuery/interfacesCoffeData';
import {ICardOrder} from './createCardShop';

export const createBasketObject = (
  data: IBasketUser,
  infoProductCoffeState: IProductFullInfo,
) => {
  const basketObject: IBasketObject = {
    id: data.id,
    productName: data.productName,
    price: data.price,
    cofeId: data.cofeId,
    cofeName: data.cofeName,
    imagesPath: data.imagesPath,
    count: data.count,
    prevPrice: infoProductCoffeState.price,
  };
  return basketObject;
};

export const createEmptyBasketObject = (
  data: IBasketUser,
  infoProductCoffeState: IProductFullInfo,
) => {
  const basketObject: IBasketObject = {
    id: '',
    productName: '',
    price: infoProductCoffeState.price,
    cofeId: '',
    cofeName: '',
    imagesPath: '',
    count: 0,
    prevPrice: infoProductCoffeState.price,
  };
  return basketObject;
};

export const createShopBasketObject = (item: ICardOrder) => {
  const basketObject: IBasketObject = {
    id: item.renderCard.id,
    productName: item.renderCard.productName,
    price: item.renderCard.price,
    cofeId: item.renderCard.cofeId,
    cofeName: item.renderCard.cofeName,
    imagesPath: item.renderCard.imagesPath,
    count: 1,
    prevPrice: item.renderCard.prevPrice,
  };
  return basketObject;
};
