import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {addLayoutTab} from '../../../redux/reduxStateSlice/layoutTabSlice';
import {light} from '../../../themeNameApp';
import {colorTabBarObject} from './colorTabBarObject';
export const CustomTabBar = ({
  state,
  navigation,
  descriptors,
}: MaterialTopTabBarProps) => {
  const dispatch = useDispatch();
  const layoutTabState = useSelector(
    (stateSelector: RootState) => stateSelector.layoutTabState,
  );
  const themeState = useSelector(
    (stateSelector: RootState) => stateSelector.themeState,
  );
  const progress = useSharedValue(1);
  const colorProgress = useDerivedValue(() =>
    themeState.theme == light ? withSpring(0) : withSpring(1),
  );
  console.log(layoutTabState);
  const rColorStyleMain = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      colorProgress.value,
      [0, 1],
      [
        colorTabBarObject.BackgroundColorMainLight,
        colorTabBarObject.BackgroundColorMainDark,
      ],
    );
    return {
      backgroundColor: backgroundColor,
    };
  });
  const rColorStyleBar = useAnimatedStyle(() => {
    const background = interpolateColor(
      colorProgress.value,
      [0, 1],
      [
        colorTabBarObject.BackgroundColorTabBarLight,
        colorTabBarObject.BackgroundColorTabBarDark,
      ],
    );
    const borderColor = interpolateColor(
      colorProgress.value,
      [0, 1],
      [
        colorTabBarObject.BorderColorTabLight,
        colorTabBarObject.BorderColorTabDark,
      ],
    );
    return {
      backgroundColor: background,
      borderColor: borderColor,
    };
  });
  const rFunction = (currnetIndex: number) => {
    const translateX = layoutTabState[currnetIndex];
    progress.value = withTiming(translateX.translateX);
  };

  const rStyle = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      colorProgress.value,
      [0, 1],
      [
        colorTabBarObject.BackgroundColorIndicatorLight,
        colorTabBarObject.BackgroundColorIndicatorDark,
      ],
    );
    return {
      transform: [{translateX: progress.value - 33}],
      borderColor: borderColor,
    };
  });
  return (
    <Animated.View style={rColorStyleMain}>
      <Animated.View style={[styles.tabBarStyleTabNavLight, rColorStyleBar]}>
        <View style={{position: 'absolute'}}>
          <Animated.View
            style={[rStyle, styles.tabBarIndicatorStyleTabNavLight]}
          />
        </View>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
              rFunction(index);
            }
          };
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLayout={event =>
                dispatch(addLayoutTab({translateX: event.nativeEvent.layout.x}))
              }
              style={{flex: 1}}>
              {options.tabBarBadge ? options.tabBarBadge() : <Text>?</Text>}
            </TouchableOpacity>
          );
        })}
      </Animated.View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  tabBarStyleTabNavLight: {
    width: 130,
    height: 35,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 40,
    borderColor: 'black',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  tabBarStyleTabNavDark: {
    width: 130,
    height: 35,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 40,
    borderColor: 'white',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  tabBarIndicatorStyleTabNavLight: {
    borderWidth: 14,
    borderRadius: 20,
    marginTop: 2,
    marginBottom: 2,
    width: 55,
  },
  tabBarIndicatorStyleTabNavDark: {
    borderWidth: 14,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 2,
    width: 55,
  },
  tabBarLabelStyleTabNav: {
    color: 'red',
    marginTop: -10,
  },
  tabBar: {
    backgroundColor: 'white',
  },
  activeBackground: {
    position: 'absolute',
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  component: {
    height: 60,
    width: 60,
    marginTop: -5,
  },
  componentCircle: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 36,
    width: 36,
  },
});
