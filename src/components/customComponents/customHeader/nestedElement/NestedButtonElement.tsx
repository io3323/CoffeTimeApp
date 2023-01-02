import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import backIconMain from '../../../../assets/image/mainScreen/backIconMain.png';
import React, {useEffect, useState} from 'react';
import {RootState} from '../../../../redux/reduxStore/store';
import listIconBar from '../../../../assets/image/mainScreen/listIconBar.png';
import {useSelector} from 'react-redux';
import {SecondScreenName} from '../../../../navigation/screens/SecondScreen';
import {ListCoffeScreenName} from '../../../../navigation/screens/ListCoffeScreen';
import listIconBarDark from '../../../../assets/image/mainScreen/listIconBarDark.png';
import {light} from '../../../../themeNameApp';
import backIconMainDark from '../../../../assets/image/mainScreen/backIconMainDark.png';
export const NestedButtonElement = () => {
  const backButtonControllerState = useSelector(
    (state: RootState) => state.backButtonControllerState,
  );
  const themeState = useSelector((state: RootState) => state.themeState);
  const navigate = useNavigation();
  const backButtonActive = () => {
    navigate.goBack();
  };
  const drawerActive = () => {
    navigate.dispatch(DrawerActions.openDrawer);
  };
  const [controller, setController] = useState(false);
  useEffect(() => {
    if (backButtonControllerState.nameScreen == ListCoffeScreenName) {
      setController(true);
    } else if (backButtonControllerState.nameScreen == SecondScreenName) {
      setController(true);
    } else {
      setController(false);
    }
  }, [backButtonControllerState.nameScreen]);
  return (
    <View>
      {controller == false && (
        <TouchableOpacity onPress={() => backButtonActive()}>
          <Image
            source={themeState.theme == light ? backIconMain : backIconMainDark}
            style={
              themeState.theme == light
                ? styles.backButtonLight
                : styles.backButtonDark
            }
          />
        </TouchableOpacity>
      )}
      {controller && (
        <TouchableOpacity onPress={() => drawerActive()}>
          <Image
            source={themeState.theme == light ? listIconBar : listIconBarDark}
            style={
              themeState.theme == light
                ? styles.listIconBarLight
                : styles.listIconBarDark
            }
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  backButtonLight: {
    width: 25,
    height: 25,
    marginLeft: -5,
  },
  backButtonDark: {
    width: 20,
    height: 20,
    marginLeft: -5,
  },
  listIconBarLight: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
  listIconBarDark: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
});
