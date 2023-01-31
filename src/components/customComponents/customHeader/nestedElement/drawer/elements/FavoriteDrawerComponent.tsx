import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FavoriteCoffeScreenName} from '../../../../../../navigation/navigator/nameScreen';
import favoriteCoffeIcon from '../../../../../../assets/image/mainScreen/favoriteCoffe.png';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Color} from '../../../../../../Color';

export const FavoriteDrawerComponent = () => {
  const {t} = useTranslation();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.favoriteCoffeeContainer}>
      <View style={styles.favoriteTextContainer}>
        <Text style={styles.favoriteText}>
          {t('common:drawerScreen:favorite')}
        </Text>
        <Text style={styles.favoriteText}>
          {t('common:drawerScreen:drinks')}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.favoriteIconContainer}
        onPress={() => navigation.navigate(FavoriteCoffeScreenName)}>
        <Image source={favoriteCoffeIcon} style={styles.favoriteCoffeeIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  favoriteCoffeeContainer: {
    flexDirection: 'row',
  },
  favoriteCoffeeIcon: {
    width: 50,
    height: 50,
  },
  favoriteTextContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteIconContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteText: {
    fontSize: 20,
    fontFamily: 'SFUIText-Regular',
    color: Color.drawerColorObject.exitButton.colorText,
  },
});
