import {IBasketObject} from '../../redux/reduxStateSlice/basketObjectSlice';

export const createButtonBasketObject = (basketObjectState: IBasketObject) => {
  const basketObject = {
    id: basketObjectState.id,
    productName: basketObjectState.productName,
    price: basketObjectState.price,
    cofeId: basketObjectState.cofeId,
    cofeName: basketObjectState.cofeName,
    imagesPath: basketObjectState.imagesPath,
    count: basketObjectState.count,
    prevPrice: basketObjectState.prevPrice,
  };
  return basketObject;
};

export const createDeleteBasketObject = (basketObjectState: IBasketObject) => {
  const basketObject = {
    id: basketObjectState.id,
    productName: basketObjectState.productName,
    price: basketObjectState.price,
    cofeId: basketObjectState.cofeId,
    cofeName: basketObjectState.cofeName,
    imagesPath: basketObjectState.imagesPath,
    count: 1,
    prevPrice: basketObjectState.prevPrice,
  };
  return basketObject;
};
