import {SafeAreaView, StyleSheet, View, Animated} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/reduxStore/store';
import {useEffect, useState} from 'react';
import {light} from '../../themeNameApp';
import {SwipeListElement} from './orderElement/SwipeListElement';
import {InitialOrderComponent} from './customElement/InitialOrderComponent';
import {BottomOrderComponent} from './orderBottomElement/BottomOrderComponent';
import {ReanimatedSwipeElement} from './orderElement/ReanimatedSwipeElement';
export const OrderComponent = () => {
  const basketUserState = useSelector(
    (state: RootState) => state.basketUserState,
  );
  useSelector((state: RootState) => state.localisationState);
  const themeState = useSelector((state: RootState) => state.themeState);
  const [controller, setController] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    basketUserState.map(effect => {
      if (effect.id == '') {
        setController(false);
      } else {
        setController(true);
      }
    });
  });
  useEffect(() => {
    let totalPriceVariable = 0;
    let totalCountVariable = 0;
    basketUserState.map(data => {
      totalPriceVariable = data.price + totalPriceVariable;
      totalCountVariable = data.count + totalCountVariable;
    });
    setTotalPrice(totalPriceVariable);
    setTotalCount(totalCountVariable);
  }, [basketUserState]);
  const rowAnimatedValues: any = {};
  basketUserState.forEach(data => {
    rowAnimatedValues[`${data.id}`] = {
      rowHeight: new Animated.Value(160),
      rowFrontTranslate: new Animated.Value(1),
      rowBackWidth: new Animated.Value(100),
    };
  });
  return (
    <SafeAreaView
      style={
        themeState.theme == light
          ? styles.safeAreaConteinerLight
          : styles.safeAreaConteinerDark
      }>
      {controller && (
        <View style={styles.mainConteiner}>
          {/*<SwipeListElement />*/}
          <ReanimatedSwipeElement />
          <BottomOrderComponent
            totalCount={totalCount}
            totalPrice={totalPrice}
          />
        </View>
      )}
      {controller == false && <InitialOrderComponent />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaConteinerDark: {
    backgroundColor: '#534965',
  },
  safeAreaConteinerLight: {
    backgroundColor: '#f2f2f2',
  },
  mainConteiner: {
    height: '100%',
  },
  separator: {
    backgroundColor: 'black',
    width: 300,
    height: 2,
  },
});
