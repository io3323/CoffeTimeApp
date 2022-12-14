import {CardShop} from './CardShop';
import {FunctionComponent} from 'react';
import {Animated} from 'react-native';
interface ICardShopTrans {
  id: string;
  productName: string;
  price: number;
  cofeId: string;
  cofeName: string;
  imagesPath: string;
  count: number;
  prevState: number;
}
export const CardShopTransitionComponent: FunctionComponent<
  ICardShopTrans
> = props => {
  const {
    id,
    productName,
    price,
    cofeId,
    cofeName,
    imagesPath,
    count,
    prevState,
  } = props;
  return (
    <Animated.View>
      <CardShop
        id={id}
        productName={productName}
        price={price}
        cofeId={cofeId}
        cofeName={cofeName}
        imagesPath={imagesPath}
        count={count}
        prevPrice={prevState}
      />
    </Animated.View>
  );
};
