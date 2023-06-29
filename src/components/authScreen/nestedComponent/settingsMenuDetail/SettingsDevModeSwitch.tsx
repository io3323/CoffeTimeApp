import {View} from 'react-native';
import {Switch} from 'react-native-switch';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {Color} from '../../../../Color';
import {changeGlobalRegState} from '../../../../redux/reduxStateSlice/globalRegSlice';
import {StyleSheet} from 'react-native';
export const SettingsDevModeSwitch = () => {
  const dispatch = useDispatch();
  const globalRegState = useSelector(
    (state: RootState) => state.globalRegState,
  );
  const toggleSwitch = () => {
    dispatch(changeGlobalRegState(globalRegState ? false : true));
  };
  const {backgroundInactive, backgroundActive} =
    Color.authColorObject.settings.settingsMain.languageSwitch;
    
  return (
    <View style={styles.mainContainer}>
      <Switch
        value={globalRegState}
        onValueChange={toggleSwitch}
        disabled={false}
        activeText={'🥷🏻'}
        inActiveText={'🧑🏻‍💻'}
        circleSize={40}
        activeTextStyle={{fontSize: 20}}
        inactiveTextStyle={{fontSize: 20}}
        switchLeftPx={5}
        switchRightPx={5}
        backgroundActive={backgroundActive}
        backgroundInactive={backgroundInactive}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
  },
});
