import {DetailProductNormalButton} from '../buttonDetailComponent/DetailProductNormalButton';
import {createNormalButtonData} from '../../../../../externalFunctions/detailProductScreen/createNormalButtonData';
import {View} from 'react-native';
import {DetailProductActiveButton} from '../buttonDetailComponent/DetailProductActiveButton';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';

export const PayButtonDetailElement = () => {
  const basketObjectState = useSelector(
    (state: RootState) => state.basketObjectState,
  );
  const infoProductCoffeeState = useSelector(
    (state: RootState) => state.infoProductCoffeState,
  );
  return (
    <View>
      {basketObjectState.count == 0 && (
        <DetailProductNormalButton
          infoProduct={
            createNormalButtonData(
              infoProductCoffeeState,
              1,
              infoProductCoffeeState.price,
            ).infoProduct
          }
        />
      )}
      {basketObjectState.count != 0 && <DetailProductActiveButton />}
    </View>
  );
};
