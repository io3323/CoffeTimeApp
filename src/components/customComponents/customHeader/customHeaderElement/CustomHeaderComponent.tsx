import {SafeAreaView, View} from 'react-native';
import {HEIGHT_APP, SizePhoneStatus} from '../../../../definitionSize';
import {CustomBackButton} from '../CustomBackButton';
import {CustomHeaderTitle} from '../CustomHeaderTitle';
import {CustomBagShopButton} from '../nestedElement/shopButton/CustomBagShopButton';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import {light} from '../../../../themeNameApp';
import Animated from 'react-native-reanimated';
import {OrderScreenName} from '../../../../navigation/navigator/nameScreen';
import {Color} from '../../../../Color';

export const CustomHeaderComponent = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const backButtonControllerState = useSelector(
    (state: RootState) => state.backButtonControllerState,
  );
  const progressColor = useDerivedValue(() =>
    themeState.theme == light ? withSpring(0) : withSpring(1),
  );
  const {colorMas} = Color.headerColorObject.mainComponent;
  const rStyle = useAnimatedStyle(() => {
    const background = interpolateColor(progressColor.value, [0, 1], colorMas);
    return {
      backgroundColor: background,
    };
  });
  return (
    <SafeAreaView>
      <Animated.View
        style={[
          {
            width: '100%',
            height: SizePhoneStatus ? HEIGHT_APP * 0.06 : HEIGHT_APP * 0.08,
            flexDirection: 'row',
          },
          rStyle,
        ]}>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingLeft: 20,
          }}>
          <CustomBackButton />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <CustomHeaderTitle />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingRight: 10,
          }}>
          {backButtonControllerState.nameScreen != OrderScreenName && (
            <CustomBagShopButton />
          )}
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};
