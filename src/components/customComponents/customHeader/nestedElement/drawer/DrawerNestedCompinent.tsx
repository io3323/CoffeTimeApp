import {StyleSheet, View} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {HEIGHT_APP} from '../../../../../definitionSize';
import {UserImageComponent} from './elements/UserImageComponent';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';
import React, {useEffect, useState} from 'react';
import {light} from '../../../../../themeNameApp';
import {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import {UserNameDrawer} from './elements/UserNameDrawer';
import {ShopIconComponent} from './elements/ShopIconComponent';
import {FavoriteDrawerComponent} from './elements/FavoriteDrawerComponent';
import {LocalSwitchComponent} from './elements/LocalSwitchComponent';
import {ThemeSwitchComponent} from './elements/ThemeSwitchComponent';
import {ExitButtonComponent} from './elements/ExitButtonComponent';
import {Color} from '../../../../../Color';
export const DrawerNestedCompinent = () => {
  const userInfoState = useSelector((state: RootState) => state.userInfoState);
  const themeState = useSelector((state: RootState) => state.themeState);
  const basketUserState = useSelector(
    (state: RootState) => state.basketUserState,
  );
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let totalPriceVariable = 0;
    basketUserState.map(data => {
      totalPriceVariable = data.price + totalPriceVariable;
    });
    setTotalPrice(totalPriceVariable);
  }, [basketUserState]);
  const progress = useDerivedValue(() =>
    themeState.theme == light ? withSpring(0) : withSpring(1),
  );
  const {backgroundColorDrawer} = Color.drawerColorObject.mainComponent;
  const rStyleDrawerCont = useAnimatedStyle(() => {
    const background = interpolateColor(
      progress.value,
      [0, 1],
      [backgroundColorDrawer.light, backgroundColorDrawer.dark],
    );
    return {
      backgroundColor: background,
    };
  });
  return (
    <DrawerContentScrollView
      style={{
        backgroundColor:
          themeState.theme == light
            ? backgroundColorDrawer.light
            : backgroundColorDrawer.dark,
      }}>
      <Animated.View style={[styles.mainContainer, rStyleDrawerCont]}>
        <View style={styles.imageContainer}>
          <UserImageComponent image={userInfoState.userInfo!.userImage} />
        </View>
        <UserNameDrawer />
        <ShopIconComponent totalPrice={totalPrice} />
        <FavoriteDrawerComponent />
        <LocalSwitchComponent />
        <ThemeSwitchComponent />
        <ExitButtonComponent />
      </Animated.View>
    </DrawerContentScrollView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: HEIGHT_APP,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '20%',
    width: '100%',
  },
});
