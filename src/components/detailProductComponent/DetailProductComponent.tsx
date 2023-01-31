import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reduxStore/store';
import {useEffect} from 'react';
import {addBacketObject} from '../../redux/reduxStateSlice/basketObjectSlice';
import {light} from '../../themeNameApp';
import {
  createBasketObject,
  createEmptyBasketObject,
} from '../../externalFunctions/orderScreen/createBasketObject';
import {UpDetailProductComponent} from './detailElement/UpDetailProductComponent';
import {CenterDetailProductComponent} from './detailElement/CenterDetailProductComponent';
import {AtributeDetailComponent} from './detailElement/AtributeDetailComponent';
import {BottomDetailProductComponent} from './detailElement/BottomDetailProductComponent';
import {Color} from '../../Color';

const {mainContainer, safeAreaContainer} =
  Color.detailProductColorObject.detailProductComponent;
export const DetailProductComponent = () => {
  const infoProductCoffeState = useSelector(
    (state: RootState) => state.infoProductCoffeState,
  );
  const basketUserState = useSelector(
    (state: RootState) => state.basketUserState,
  );
  const dispatch = useDispatch();
  const themeState = useSelector((state: RootState) => state.themeState);
  useSelector((state: RootState) => state.basketObjectState);
  useEffect(() => {
    basketUserState.map(data => {
      if (data.id == infoProductCoffeState.id && data.id != '') {
        dispatch(
          addBacketObject(createBasketObject(data, infoProductCoffeState)),
        );
      }
      if (data.id == '') {
        dispatch(
          addBacketObject(createEmptyBasketObject(data, infoProductCoffeState)),
        );
      }
    });
  }, [basketUserState, infoProductCoffeState]);

  return (
    <SafeAreaView
      style={
        themeState.theme == light
          ? styles.safeAreaContainerLight
          : styles.safeAreaContainerDark
      }>
      <View
        style={
          themeState.theme == light
            ? styles.mainContainerLight
            : styles.mainContainerDark
        }>
        <View style={styles.upGlobalContainer}>
          <UpDetailProductComponent />
          <CenterDetailProductComponent />
          <AtributeDetailComponent />
          <BottomDetailProductComponent />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainerLight: {backgroundColor: safeAreaContainer.light},
  safeAreaContainerDark: {backgroundColor: safeAreaContainer.dark},
  mainContainerLight: {
    height: '100%',
    backgroundColor: mainContainer.light,
    alignItems: 'center',
  },
  mainContainerDark: {
    height: '100%',
    backgroundColor: mainContainer.dark,
    alignItems: 'center',
  },
  upGlobalContainer: {
    flex: 6,
    marginLeft: '3%',
    marginRight: '3%',
  },
});
