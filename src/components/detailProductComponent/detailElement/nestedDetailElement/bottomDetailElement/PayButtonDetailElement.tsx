import {PayButtonNormalState} from '../buttonDetailComponent/PayButtonNormalState';
import {createNormalButtonData} from '../../../../../externalFunctions/detailProductScreen/createNormalButtonData';
import {View} from 'react-native';
import {PayButtonActiveState} from '../buttonDetailComponent/PayButtonActiveState';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';

export const PayButtonDetailElement = () => {
  const basketObjectState = useSelector(
    (state: RootState) => state.basketObjectState,
  );
  const infoProductCoffeState = useSelector(
    (state: RootState) => state.infoProductCoffeState,
  );
  return (
    <View>
      {basketObjectState.count == 0 && (
        <PayButtonNormalState
          infoProduct={
            createNormalButtonData(
              infoProductCoffeState,
              1,
              infoProductCoffeState.price,
            ).infoProduct
          }
        />
      )}
      {basketObjectState.count != 0 && (
        <View>
          <PayButtonActiveState />
        </View>
      )}
    </View>
  );
};
