import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {Icon} from 'react-native-eva-icons';
import {deleteProduct} from '../../../../../redux/reduxStateSlice/basketUserSlice';
import {useDispatch} from 'react-redux';
import {FC} from 'react';
import {WIDTH_APP} from '../../../../../definitionSize';
type HiddenCardShopType = {
  id: string;
  translationX: Animated.SharedValue<number>;
  x: Animated.SharedValue<number>;
};
export const HiddenCardShopComponent: FC<HiddenCardShopType> = ({
  id,
  translationX,
  x,
}) => {
  const dispatch = useDispatch();
  const dispatchFunction = () => {
    dispatch(deleteProduct(id));
  };
  const rIconContainerStyle = useAnimatedStyle(() => {
    const scale = withTiming(
      translationX.value < -WIDTH_APP * 0.05 ? 10 : WIDTH_APP * 0.9,
      {duration: 400},
    );
    return {
      width: x.value,
      transform: [
        {
          translateX: scale,
        },
      ],
    };
  });
  return (
    <View style={[styles.backIcon]}>
      <TouchableOpacity onPress={() => dispatchFunction()}>
        <Animated.View style={[{alignItems: 'flex-end'}]}>
          <Animated.View
            style={[
              {
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'red',
              },
              rIconContainerStyle,
            ]}>
            <Icon
              name={'trash-2-outline'}
              fill={'white'}
              width={56}
              height={56}
            />
          </Animated.View>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    width: '100%',
    height: '85%',
    position: 'absolute',
    marginTop: '6%',
  },
});
