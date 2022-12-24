import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import shoppingBag from '../../../assets/image/rigtNavigateIcon/shoppingBag.png';
import React, {useEffect, useState} from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import rubleGray from '../../../assets/image/detailProductScreen/rubleGray.png';
import {StackNavigationProp} from '@react-navigation/stack';
import {OrderScreenName} from '../../../navigation/navigator/nameScreen';
export const CustomBagShopButton = () => {
  const navigate = useNavigation<StackNavigationProp<ParamListBase>>();
  const backButtonActive = () => {
    navigate.navigate(OrderScreenName);
  };
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
  return (
    <View>
      <TouchableOpacity onPress={() => backButtonActive()}>
        <View style={styles.conteiner}>
          <Image source={shoppingBag} style={styles.backButton} />
          {totalPrice != 0 && (
            <View style={styles.conteiner}>
              <Text style={styles.textPrice}>{totalPrice}</Text>
              <Image source={rubleGray} style={styles.rubleGray} />
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
    marginLeft: -10,
  },
  conteiner: {
    display: 'flex',
    flexDirection: 'row',
  },
  rubleGray: {
    width: 10,
    height: 15,
  },
  textPrice: {
    color: '#474747',
    fontFamily: 'Helvetica',
  },
});
