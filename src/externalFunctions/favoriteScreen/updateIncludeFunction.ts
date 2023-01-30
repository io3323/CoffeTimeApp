import {IProductCafeModel} from '../../redux/reduToolKitQuery/interfacesCoffeData';

export const updateIncludeFunction = (
  idCurrent: string,
  favoriteMas: Array<IProductCafeModel>,
) => {
  let result = false;
  favoriteMas.map(prod => {
    if (prod.id === idCurrent) {
      result = true;
    }
  });
  return result;
};
