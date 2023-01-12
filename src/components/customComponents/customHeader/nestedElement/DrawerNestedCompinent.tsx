import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Switch} from 'react-native-switch';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {HEIGHT_APP} from '../../../../definitionSize';
import {UserImageComponent} from './UserImageComponent';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {
  AuthScreenName,
  FavoriteCoffeScreenName,
  OrderScreenName,
} from '../../../../navigation/navigator/nameScreen';
import {StackNavigationProp} from '@react-navigation/stack';
import shoppingBagWhite from '../../../../assets/image/rigtNavigateIcon/shoppingbagWhite.png';
import React, {useEffect, useState} from 'react';
import rubleGray from '../../../../assets/image/rigtNavigateIcon/ruble.png';
import {changeLanguage} from '../../../../redux/reduxStateSlice/localisationSlice';
import favoriteCoffeIcon from '../../../../assets/image/mainScreen/favoriteCoffe.png';
import {eng, ru} from '../../../../localisationLanguageName';
import {
  bagShopDrawerENG,
  bagShopDrawerRU,
  exitENG,
  exitRU,
  langDrawerENG,
  langDrawerRU,
  themeDrawwerENG,
  themeDrawwerRU,
  userNameDrawerENG,
  userNameDrawerRU,
} from '../../../../localisationScreen/DrawerNestedCompineLocal';
import {changeTheme} from '../../../../redux/reduxStateSlice/themeSlice';
import {dark, light} from '../../../../themeNameApp';
export const DrawerNestedCompinent = () => {
  const userInfoState = useSelector((state: RootState) => state.userInfoState);
  const localisationState = useSelector(
    (state: RootState) => state.localisationState,
  );
  const themeState = useSelector((state: RootState) => state.themeState);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabledTheme, setIsEnabledTheme] = useState(false);
  const dispatch = useDispatch();
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    isEnabled
      ? dispatch(changeLanguage({local: ru}))
      : dispatch(changeLanguage({local: eng}));
  };
  const toggleSwitchTheme = () => {
    setIsEnabledTheme(previousState => !previousState);
    isEnabledTheme
      ? dispatch(changeTheme({theme: light}))
      : dispatch(changeTheme({theme: dark}));
  };
  const exitActionButton = () => {
    navigation.navigate(AuthScreenName);
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
    <DrawerContentScrollView
      style={
        themeState.theme == light
          ? styles.drawerConteinerLight
          : styles.drawerConteinerDark
      }>
      <View style={styles.mainConteiner}>
        <View style={styles.imageConteiner}>
          <UserImageComponent image={userInfoState.userImage} />
        </View>
        <View style={styles.userDataConteiner}>
          <View style={styles.descriptionTextConteiner}>
            <Text style={styles.descriptionText}>
              {localisationState.local == ru
                ? userNameDrawerRU
                : userNameDrawerENG}
              :
            </Text>
          </View>
          <View style={styles.userNameTextConteiner}>
            <Text style={styles.userNameText}>{userInfoState.userName}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.bagConteiner}
          onPress={() => navigation.navigate(OrderScreenName)}>
          <View style={styles.bagTextConteiner}>
            <Text style={styles.bagText}>
              {localisationState.local == ru
                ? bagShopDrawerRU
                : bagShopDrawerENG}
              :
            </Text>
          </View>
          <View style={styles.bagIconConteiner}>
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
          </View>
        </TouchableOpacity>
        <View style={styles.favoriteCoffeConteiner}>
          <View style={styles.favoriteTextConteiner}>
            <Text style={styles.favoriteText}>Избранные</Text>
            <Text style={styles.favoriteText}>напитки:</Text>
          </View>
          <TouchableOpacity
            style={styles.favoriteIconConteiner}
            onPress={() => navigation.navigate(FavoriteCoffeScreenName)}>
            <Image
              source={favoriteCoffeIcon}
              style={styles.favoriteCoffeIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.switchMainConteiner}>
          <View style={styles.textSwitchConteiner}>
            <Text style={styles.textSwitch}>
              {localisationState.local == ru ? langDrawerRU : langDrawerENG}:
            </Text>
          </View>
          <View style={styles.switchConteiner}>
            <Switch
              value={isEnabled}
              onValueChange={toggleSwitch}
              disabled={false}
              activeText={'🇺🇸'}
              inActiveText={'🇷🇺'}
              circleSize={40}
              activeTextStyle={{fontSize: 20}}
              inactiveTextStyle={{fontSize: 20}}
              switchLeftPx={5}
              switchRightPx={5}
              backgroundActive={'#6c6c6c'}
              backgroundInactive={'#6C6C6CFF'}
            />
          </View>
        </View>
        <View style={styles.switchMainConteiner}>
          <View style={styles.textSwitchConteiner}>
            <Text style={styles.textSwitch}>
              {localisationState.local == ru ? themeDrawwerRU : themeDrawwerENG}
              :
            </Text>
          </View>
          <View style={styles.switchConteiner}>
            <Switch
              value={isEnabledTheme}
              onValueChange={toggleSwitchTheme}
              disabled={false}
              activeText={'🌑'}
              inActiveText={'🌕️'}
              circleSize={40}
              activeTextStyle={{fontSize: 20}}
              inactiveTextStyle={{fontSize: 20}}
              switchLeftPx={5}
              switchRightPx={5}
              backgroundActive={'#6c6c6c'}
              backgroundInactive={'#6C6C6CFF'}
              circleActiveColor={'#232638'}
              circleInActiveColor={'#eec060'}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.exitButton}
          onPress={() => exitActionButton()}>
          <Text style={styles.exitButtonText}>
            {localisationState.local == ru ? exitRU : exitENG}
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
const styles = StyleSheet.create({
  drawerConteinerLight: {backgroundColor: '#c5b4a0'},
  drawerConteinerDark: {backgroundColor: '#3a3450'},
  mainConteiner: {
    width: '100%',
    height: HEIGHT_APP,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageConteiner: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '20%',
    width: '100%',
  },
  userDataConteiner: {
    marginTop: '10%',
    flexDirection: 'row',
    width: '100%',
  },
  descriptionTextConteiner: {
    alignItems: 'center',
    flex: 3,
  },
  descriptionText: {
    fontFamily: 'SFUIText-Regular',
    fontSize: 20,
    color: 'white',
  },
  userNameTextConteiner: {
    alignItems: 'center',
    flex: 2,
  },
  userNameText: {
    fontFamily: 'SFUIText-Regular',
    fontSize: 20,
    color: 'white',
  },
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
  switchMainConteiner: {
    width: '100%',
    marginTop: '5%',
    flexDirection: 'row',
  },
  switchConteiner: {
    flex: 2,
    alignItems: 'center',
  },
  textSwitchConteiner: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSwitch: {
    color: 'white',
    fontFamily: 'SFUIText-Regular',
    fontSize: 20,
  },
  conteiner: {
    display: 'flex',
    justifyContent: 'flex-start',
    flex: 3,
    height: HEIGHT_APP * 0.06,
    marginLeft: -25,
  },
  nestedConteiner: {
    flexDirection: 'row',
  },
  rubleGray: {
    width: 10,
    height: 15,
  },
  textPrice: {
    color: 'white',
    fontFamily: 'Helvetica',
  },
  exitButton: {
    backgroundColor: 'red',
    width: 200,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  exitButtonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'SFUIText-Regular',
  },
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
