import {StyleSheet, View} from 'react-native';
import {FunctionComponent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {light} from '../../../themeNameApp';
import {ICardShop} from '../../../externalFunctions/orderScreen/createCardShop';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {deleteProduct} from '../../../redux/reduxStateSlice/basketUserSlice';
import {HiddenCardShopComponent} from './cardElement/hiddenElement/HiddenCardShopComponent';
import {CardShopElement} from './cardElement/nestedElement/CardShopElement';
import {WIDTH_APP} from '../../../definitionSize';
const LIST_ITEM_HEIGHT = 150;
interface CardShopModel
  extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  renderCard: ICardShop;
  onDismiss?: (id: string) => void;
}
type ContextType = {
  translateX: number;
  x: number;
  state: number;
};
export const CardShop: FunctionComponent<CardShopModel> = props => {
  const TRANSLATE_X_THRESHOLD = -WIDTH_APP * 0.35;
  const dispatch = useDispatch();
  const dispatchFunction = (id: string) => {
    dispatch(deleteProduct(id));
  };
  const {id} = props.renderCard;
  const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);
  const translationX = useSharedValue(0);
  const opacityShared = useSharedValue(1);
  const animationState = useSharedValue(false);
  const typeState = useSharedValue(false);
  useDerivedValue(() => (typeState ? withTiming(0) : withTiming(1)));
  const x = useSharedValue(WIDTH_APP * 0.3);
  const panGesture = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event, context) => {
      context.translateX = translationX.value;
      context.x = x.value;
    },
    onActive: (event, context) => {
      if (event.translationX < 0 || animationState.value == true) {
        translationX.value = event.translationX + context.translateX;
      }
      if (event.translationX < -WIDTH_APP) {
        x.value = -WIDTH_APP * 0.3;
      } else {
        x.value = -translationX.value;
      }
    },
    onEnd: () => {
      const shouldBeDismissed = translationX.value < TRANSLATE_X_THRESHOLD;
      if (shouldBeDismissed) {
        x.value = WIDTH_APP;
        translationX.value = withTiming(-WIDTH_APP);
        itemHeight.value = withTiming(0);
        opacityShared.value = withTiming(0, undefined, isFinished => {
          if (isFinished) {
            runOnJS(dispatchFunction)(id);
          }
        });
      } else if (
        translationX.value > TRANSLATE_X_THRESHOLD &&
        translationX.value < -WIDTH_APP * 0.25
      ) {
        translationX.value = withTiming(-WIDTH_APP * 0.25);
        animationState.value = true;
      } else {
        translationX.value = withTiming(0);
        animationState.value = false;
      }
    },
  });
  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translationX.value,
      },
    ],
  }));
  const rContainerStyle = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
      opacity: opacityShared.value,
    };
  });
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View>
      <Animated.View style={[rContainerStyle, styles.blockContainer]}>
        <HiddenCardShopComponent id={id} translationX={translationX} x={x} />
        <PanGestureHandler
          failOffsetY={[-5, 5]}
          activeOffsetX={[-5, 5]}
          simultaneousHandlers={props.simultaneousHandlers}
          onGestureEvent={panGesture}>
          <Animated.View
            style={[
              themeState.theme == light
                ? styles.containerMainLight
                : styles.containerMainDark,
              rStyle,
            ]}>
            <CardShopElement item={props.renderCard} />
          </Animated.View>
        </PanGestureHandler>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  blockContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  containerMainLight: {
    width: WIDTH_APP * 0.95,
    height: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerMainDark: {
    width: 370,
    height: 131,
    backgroundColor: '#6f6483',
    marginTop: 20,
    borderRadius: 10,
  },
});
