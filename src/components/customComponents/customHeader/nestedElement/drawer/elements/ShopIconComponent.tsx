import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {OrderScreenName} from '../../../../../../navigation/navigator/nameScreen';
import shoppingBagWhite from '../../../../../../assets/image/rigtNavigateIcon/shoppingbagWhite.png';
import rubleGray from '../../../../../../assets/image/rigtNavigateIcon/ruble.png';
import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HEIGHT_APP} from '../../../../../../definitionSize';
type ShopIconComponentModel = {
  totalPrice: number;
};
export const ShopIconComponent: FC<ShopIconComponentModel> = ({totalPrice}) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const {t} = useTranslation();
  return (
    <View style={styles.bagConteiner}>
      <View style={styles.bagTextConteiner}>
        <Text style={styles.bagText}>{t('common:drawerScreen:bagShop')}</Text>
      </View>
      <TouchableOpacity
        style={styles.bagIconConteiner}
        onPress={() => navigation.navigate(OrderScreenName)}>
        <View style={styles.nestedBagConteiner}>
          <Image style={styles.bagImageIcon} source={shoppingBagWhite} />
        </View>
        {totalPrice != 0 && (
          <View style={styles.conteiner}>
            <View style={styles.nestedConteiner}>
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
  bagConteiner: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: '5%',
  },
  bagTextConteiner: {
    alignItems: 'center',
    flex: 3,
  },
  bagIconConteiner: {
    flex: 2,
    alignItems: 'center',
    flexDirection: 'row',
  },
  bagImageIcon: {
    width: 50,
    height: 50,
  },
  bagText: {
    color: 'white',
    fontFamily: 'SFUIText-Regular',
    fontSize: 20,
  },
  nestedBagConteiner: {
    flex: 3,
  },
  nestedConteiner: {
    flexDirection: 'row',
  },
  conteiner: {
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
    color: 'white',
    fontFamily: 'Helvetica',
  },
});
