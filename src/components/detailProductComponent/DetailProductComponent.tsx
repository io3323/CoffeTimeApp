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
          ? styles.safeAreaConteinerLight
          : styles.safeAreaConteinerDark
      }>
      <View
        style={
          themeState.theme == light
            ? styles.mainConteinerLight
            : styles.mainConteinerDark
        }>
        <View style={styles.upGlobalConteiner}>
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
  safeAreaConteinerLight: {backgroundColor: 'white'},
  safeAreaConteinerDark: {backgroundColor: '#534965'},
  mainConteinerLight: {
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  mainConteinerDark: {
    height: '100%',
    backgroundColor: '#534965',
    alignItems: 'center',
  },
  upGlobalConteiner: {
    flex: 6,
    marginLeft: '3%',
    marginRight: '3%',
    //alignItems: 'center',
  },
});
