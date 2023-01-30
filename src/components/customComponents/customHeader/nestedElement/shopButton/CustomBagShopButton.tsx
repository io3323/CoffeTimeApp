import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import shoppingBag from '../../../../../assets/image/rigtNavigateIcon/shoppingBag.png';
import shoppingBagDark from '../../../../../assets/image/rigtNavigateIcon/shoppingbagWhite.png';
import React, {useEffect, useState} from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';
import rubleGray from '../../../../../assets/image/detailProductScreen/rubleGray.png';
import rubleDark from '../../../../../assets/image/rigtNavigateIcon/ruble.png';
import {StackNavigationProp} from '@react-navigation/stack';
import {OrderScreenName} from '../../../../../navigation/navigator/nameScreen';
import {light} from '../../../../../themeNameApp';
export const CustomBagShopButton = () => {
  const navigate = useNavigation<StackNavigationProp<ParamListBase>>();
  const backButtonActive = () => {
    navigate.navigate(OrderScreenName);
  };
  const basketUserState = useSelector(
    (state: RootState) => state.basketUserState,
  );
  const [totalPrice, setTotalPrice] = useState(0);
  const themeState = useSelector((state: RootState) => state.themeState);
  useEffect(() => {
    let totalPriceVariable = 0;
    basketUserState.map(data => {
      totalPriceVariable = data.price + totalPriceVariable;
    });
    setTotalPrice(totalPriceVariable);
  }, [basketUserState]);
  return (
    <View>
      <TouchableOpacity onPress={() => backButtonActive()}>
        <View style={styles.mainConteiner}>
          <View style={styles.shopIconConteiner}>
            <Image
              source={themeState.theme == light ? shoppingBag : shoppingBagDark}
              style={styles.backButton}
            />
          </View>
          {totalPrice != 0 && (
            <View style={styles.textPriceConteiner}>
              <Text
                style={
                  themeState.theme == light
                    ? styles.textPriceLight
                    : styles.textPriceDark
                }>
                {totalPrice}
              </Text>
              <Image
                source={themeState.theme == light ? rubleGray : rubleDark}
                style={styles.rubleGray}
              />
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backButton: {
    width: 40,
    height: 40,
  },
  mainConteiner: {width: 60, height: 50, flexDirection: 'row'},
  shopIconConteiner: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPriceConteiner: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  rubleGray: {
    width: 10,
    height: 15,
  },
  textPriceLight: {
    color: '#474747',
    fontFamily: 'Helvetica',
  },
  textPriceDark: {
    color: 'white',
    fontFamily: 'Helvetica',
  },
});
