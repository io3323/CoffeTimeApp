import {IProductCafeModel} from '../../redux/reduToolKitQuery/interfacesCoffeData';

export const createCardProduct = (item: IProductCafeModel) => {
  const cardProductObject: IProductCafeModel = {
    id: item.id,
    name: item.name,
    imagesPath: item.imagesPath,
    price: item.price,
    cofeId: item.cofeId,
    favorite: item.favorite,
  };
  return cardProductObject;
};
