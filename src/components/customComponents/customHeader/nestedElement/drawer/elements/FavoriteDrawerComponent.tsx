import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FavoriteCoffeScreenName} from '../../../../../../navigation/navigator/nameScreen';
import favoriteCoffeIcon from '../../../../../../assets/image/mainScreen/favoriteCoffe.png';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export const FavoriteDrawerComponent = () => {
  const {t} = useTranslation();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.favoriteCoffeConteiner}>
      <View style={styles.favoriteTextConteiner}>
        <Text style={styles.favoriteText}>
          {t('common:drawerScreen:favorite')}
        </Text>
        <Text style={styles.favoriteText}>
          {t('common:drawerScreen:drinks')}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.favoriteIconConteiner}
        onPress={() => navigation.navigate(FavoriteCoffeScreenName)}>
        <Image source={favoriteCoffeIcon} style={styles.favoriteCoffeIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  favoriteCoffeConteiner: {
    flexDirection: 'row',
  },
  favoriteCoffeIcon: {
    width: 50,
    height: 50,
  },
  favoriteTextConteiner: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteIconConteiner: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteText: {
    fontSize: 20,
    fontFamily: 'SFUIText-Regular',
    color: 'white',
  },
});
