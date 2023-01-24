import {SafeAreaView, View} from 'react-native';
import {HEIGHT_APP} from '../../../../definitionSize';
import {CustomBackButton} from '../CustomBackButton';
import {CustomHeaderTitle} from '../CustomHeaderTitle';
import {CustomBagShopButton} from '../nestedElement/CustomBagShopButton';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import {light} from '../../../../themeNameApp';
import {colorHeaderTitle} from '../nestedElement/colorNestedObject/colorNestedObject';
import Animated from 'react-native-reanimated';
import {OrderScreenName} from '../../../../navigation/navigator/nameScreen';

export const CustomHeaderComponent = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const backButtonControllerState = useSelector(
    (state: RootState) => state.backButtonControllerState,
  );
  const progressColor = useDerivedValue(() =>
    themeState.theme == light ? withSpring(0) : withSpring(1),
  );
  const rStyle = useAnimatedStyle(() => {
    const backgroud = interpolateColor(
      progressColor.value,
      [0, 1],
      [colorHeaderTitle.textColorLight, colorHeaderTitle.textColorDark],
    );
    return {
      backgroundColor: backgroud,
    };
  });
  return (
    <SafeAreaView>
      <Animated.View
        style={[
          {
            width: '100%',
            height: HEIGHT_APP * 0.06,
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
