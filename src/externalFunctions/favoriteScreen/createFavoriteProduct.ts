import {IProductFullInfo} from '../../redux/reduToolKitQuery/interfacesCoffeData';

export const createFavoriteProduct = (
  infoProductCoffeState: IProductFullInfo,
) => {
  const favoriteObject = {
    id: infoProductCoffeState.id,
    name: infoProductCoffeState.productName,
    cofeId: infoProductCoffeState.cofeId,
    price: infoProductCoffeState.price,
    favorite: infoProductCoffeState.favarite,
    imagesPath: infoProductCoffeState.imagesPath,
  };
  return favoriteObject;
};
