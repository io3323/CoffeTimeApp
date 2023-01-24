import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import settingsIcon from '../../../assets/image/authScreen/settingsIcon.png';
import {useEffect} from 'react';
import {SettingsMenuDetail} from './settingsMenuDetail/SettingsMenuDetail';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {changeStatusController} from '../../../redux/reduxStateSlice/settingsControllerSlice';
import {HEIGHT_APP, WIDTH_APP} from '../../../definitionSize';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
export const SettingsIcon = () => {
  const dispatch = useDispatch();
  const settingsControllerState = useSelector(
    (state: RootState) => state.settingsControllerState,
  );
  const buttonAction = () => {
    if (settingsControllerState.controller) {
      setTimeout(() => {
        dispatch(changeStatusController(false));
      }, 1000);
    } else {
      dispatch(changeStatusController(true));
    }
  };
  const scaleX = useSharedValue(0.5);
  const scaleY = useSharedValue(0.5);
  const opacity = useSharedValue(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const opacityIcon = useSharedValue(1);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        {scaleX: scaleX.value},
        {scaleY: scaleY.value},
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  }, []);
  const iconReanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityIcon.value,
    };
  });
  const animatedFuncOpen = () => {
    opacity.value = withSpring(1);
    translateX.value = withSpring(0);
    translateY.value = withSpring(40);
    scaleX.value = withSpring(1);
    scaleY.value = withSpring(1);
  };
  const animatedFuncClose = () => {
    scaleX.value = withSpring(0.5);
    scaleY.value = withSpring(0.5);
    opacity.value = withSpring(0);
  };
  const animatedCloseIcon = () => {
    opacityIcon.value = withSpring(0);
  };
  const animatedOpenIcon = () => {
    opacityIcon.value = withSpring(1);
  };
  useEffect(() => {
    if (settingsControllerState.controller) {
      animatedCloseIcon();
      animatedFuncOpen();
    } else {
      animatedFuncClose();
      animatedOpenIcon();
    }
  }, [settingsControllerState.controller]);
  return (
    <View>
      <Animated.View
        style={[styles.settingsMenuMainContainer, reanimatedStyle]}>
        <View style={styles.settingsMenuContainer}>
          <SettingsMenuDetail />
        </View>
      </Animated.View>
      <Animated.View
        style={[styles.settingsIconContainer, iconReanimatedStyle]}>
        <TouchableOpacity onPress={() => buttonAction()}>
          <Image style={styles.settingsIcon} source={settingsIcon} />
        </TouchableOpacity>
      </Animated.View>
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
