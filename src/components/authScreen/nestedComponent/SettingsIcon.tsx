import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import settingsIcon from '../../../assets/image/authScreen/settingsIcon.png';
import {useState} from 'react';
import {SettingsMenuDetail} from './settingsMenuDetail/SettingsMenuDetail';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {changeStatusController} from '../../../redux/reduxStateSlice/settingsControllerSlice';
import { HEIGHT_APP, WIDTH_APP } from "../../../definitionSize";
export const SettingsIcon = () => {
  const dispatch = useDispatch();
  const settingsControllerState = useSelector(
    (state: RootState) => state.settingsControllerState,
  );
  const buttonAction = () => {
    if (settingsControllerState.controller) {
      dispatch(changeStatusController(false));
    } else {
      dispatch(changeStatusController(true));
    }
  };
  return (
    <View>
      {settingsControllerState.controller && (
        <View style={styles.settingsMenuMainContainer}>
          <View style={styles.settingsMenuContainer}>
            <SettingsMenuDetail />
          </View>
        </View>
      )}
      {settingsControllerState.controller == false && (
        <View style={styles.settingsIconContainer}>
          <TouchableOpacity onPress={() => buttonAction()}>
            <Image style={styles.settingsIcon} source={settingsIcon} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  settingsIconContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: '5%',
  },
  settingsMenuMainContainer: {
    alignItems: 'flex-end',
  },
  settingsMenuContainer: {
    width: 130,
    height: 130,
    marginTop: -HEIGHT_APP * 0.1,
    marginLeft: -WIDTH_APP * 0.2,
  },
  settingsIcon: {
    width: 35,
    height: 35,
    left: '-5%',
  },
});
