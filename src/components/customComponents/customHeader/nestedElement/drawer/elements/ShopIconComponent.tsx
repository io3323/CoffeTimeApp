import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {OrderScreenName} from '../../../../../../navigation/navigator/nameScreen';
import shoppingBagWhite from '../../../../../../assets/image/rigtNavigateIcon/shoppingbagWhite.png';
import rubleGray from '../../../../../../assets/image/rigtNavigateIcon/ruble.png';
import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HEIGHT_APP} from '../../../../../../definitionSize';
import {Color} from '../../../../../../Color';
type ShopIconComponentModel = {
  totalPrice: number;
};
export const ShopIconComponent: FC<ShopIconComponentModel> = ({totalPrice}) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const {t} = useTranslation();
  return (
    <View style={styles.bagContainer}>
      <View style={styles.bagTextContainer}>
        <Text style={styles.bagText}>{t('common:drawerScreen:bagShop')}</Text>
      </View>
      <TouchableOpacity
        style={styles.bagIconContainer}
        onPress={() => navigation.navigate(OrderScreenName)}>
        <View style={styles.nestedBagContainer}>
          <Image style={styles.bagImageIcon} source={shoppingBagWhite} />
        </View>
        {totalPrice != 0 && (
          <View style={styles.container}>
            <View style={styles.nestedContainer}>
              <Text style={styles.textPrice}>{totalPrice}</Text>
              <Image source={rubleGray} style={styles.rubleGray} />
            </View>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: '5%',
  },
  bagTextContainer: {
    alignItems: 'center',
    flex: 3,
  },
  bagIconContainer: {
    flex: 2,
    alignItems: 'center',
    flexDirection: 'row',
  },
  bagImageIcon: {
    width: 50,
    height: 50,
  },
  bagText: {
    color: Color.drawerColorObject.shopIconComponent.colorText,
    fontFamily: 'SFUIText-Regular',
    fontSize: 20,
  },
  nestedBagContainer: {
    flex: 3,
  },
  nestedContainer: {
    flexDirection: 'row',
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    flex: 3,
    height: HEIGHT_APP * 0.06,
    marginLeft: -25,
  },
  rubleGray: {
    width: 10,
    height: 15,
  },
  textPrice: {
    color: Color.drawerColorObject.shopIconComponent.colorText,
    fontFamily: 'Helvetica',
  },
});
