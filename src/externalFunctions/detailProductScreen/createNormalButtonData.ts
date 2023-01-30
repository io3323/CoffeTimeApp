import {IProductFullInfo} from '../../redux/reduToolKitQuery/interfacesCoffeData';
interface AddType {
  count: number;
  prevPrice: number;
}
export interface IButtonState {
  infoProduct: IProductFullInfo & AddType;
}
export const createNormalButtonData = (
  infoProduct: IProductFullInfo,
  count: number,
  prevPrice: number,
) => {
  const buttonObject: IButtonState = {
    infoProduct: {
      id: infoProduct.id,
      productName: infoProduct.productName,
      price: infoProduct.price,
      cofeId: infoProduct.cofeId,
      cofeName: infoProduct.cofeName,
      imagesPath: infoProduct.imagesPath,
      count: count,
      prevPrice: prevPrice,
    },
  };
  return buttonObject;
};
