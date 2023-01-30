import {Dimensions, StyleSheet, View} from 'react-native';
import {FunctionComponent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {light} from '../../../themeNameApp';
import {ICardShop} from '../../../externalFunctions/orderScreen/createCardShop';
import {ImageCardShop} from './orderCardShopElement/ImageCardShop';
import {TextProductOrderComponent} from './orderCardShopElement/TextProductOrderComponent';
import {DeleteButtonComponent} from './orderCardShopElement/DeleteButtonComponent';
import {ShopDescriptionComponent} from './orderCardShopElement/ShopDescriptionComponent';
import {CoffeNameShopComponent} from './orderCardShopElement/CoffeNameShopComponent';
import {PriceDescriptionComponent} from './orderCardShopElement/PriceDescriptionComponent';
import {PriceShopComponent} from './orderCardShopElement/PriceShopComponent';
import {RubleIconComponent} from './orderCardShopElement/RubleIconComponent';
import {PayShopButtonComponent} from './orderCardShopElement/PayShopButtonComponent';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Icon} from 'react-native-eva-icons';
import {deleteProduct} from '../../../redux/reduxStateSlice/basketUserSlice';
const LIST_ITEM_HEIGHT = 150;
type CardShopModel = {
  renderCard: ICardShop;
  onDismiss?: (id: string) => void;
};
export const CardShop: FunctionComponent<CardShopModel> = props => {
  const dispatch = useDispatch();
  const dispatchFunction = (id: string) => {
    dispatch(deleteProduct(id));
  };
  const {id, imagesPath, productName, cofeName, price, count} =
    props.renderCard;
  const {onDismiss} = props;
  const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);
  const translationX = useSharedValue(0);
  const opacityShared = useSharedValue(1);
  const {width: SCREEN_WIDTH} = Dimensions.get('window');
  const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.3;
  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: event => {
      translationX.value = event.translationX;
    },
    onEnd: () => {
      const shouldBeDismissed = translationX.value < TRANSLATE_X_THRESHOLD;
      if (shouldBeDismissed) {
        translationX.value = withTiming(-SCREEN_WIDTH);
        itemHeight.value = withTiming(0);
        opacityShared.value = withTiming(0, undefined, isFinished => {
          if (isFinished) {
            console.log('delete');
          }
        });
        if (onDismiss) {
          runOnJS(onDismiss)(id);
        }
      } else {
        translationX.value = withTiming(0);
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
  const rIconContainerStyle = useAnimatedStyle(() => {
    const opacity = withTiming(
      translationX.value < TRANSLATE_X_THRESHOLD ? 1 : 0,
    );
    return {
      opacity,
    };
  });
  const rContainerStyle = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
      opacity: opacityShared.value,
    };
  });
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View>
      {id != '' && (
        <Animated.View style={rContainerStyle}>
          <View style={[styles.backIcon]}>
            <Animated.View
              style={[
                {
                  //backgroundColor: 'green',
                  width: '50%',
                  height: '100%',
                  marginLeft: '50%',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                },
                rIconContainerStyle,
              ]}>
              <Icon
                name={'trash-2-outline'}
                fill={'red'}
                width={56}
                height={56}
                style={{marginRight: 50}}
              />
            </Animated.View>
          </View>
          <PanGestureHandler onGestureEvent={panGesture}>
            <Animated.View
              style={[
                themeState.theme == light
                  ? styles.conteinerMainLight
                  : styles.conteinerMainDark,
                rStyle,
              ]}>
              <View style={[styles.conteiner]}>
                <ImageCardShop image={imagesPath} />
                <View style={styles.blockConteiner}>
                  <View style={styles.conteinerVertical}>
                    <View style={styles.textPodunctConteinerDelete}>
                      <TextProductOrderComponent productName={productName} />
                      <DeleteButtonComponent id={id} />
                    </View>
                    <ShopDescriptionComponent />
                    <CoffeNameShopComponent coffeName={cofeName} />
                    <View style={styles.conteinerPrice}>
                      <PriceDescriptionComponent />
                      <PriceShopComponent price={price} />
                      <RubleIconComponent />
                      <PayShopButtonComponent count={count} item={props} />
                    </View>
                  </View>
                </View>
              </View>
            </Animated.View>
          </PanGestureHandler>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    display: 'flex',
    flexDirection: 'row',
  },
  blockConteiner: {
    marginLeft: 10,
  },
  conteinerMainLight: {
    width: 370,
    height: 131,
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 10,
  },
  conteinerMainDark: {
    width: 370,
    height: 131,
    backgroundColor: '#6f6483',
    marginTop: 20,
    borderRadius: 10,
  },
  conteinerVertical: {
    display: 'flex',
    flexDirection: 'column',
  },
  conteinerPrice: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'flex-end',
  },
  textPodunctConteinerDelete: {
    display: 'flex',
    flexDirection: 'row',
    width: 235,
    height: 30,
  },
  image: {
    width: 30,
    height: 30,
  },
  backIcon: {
    width: '100%',
    height: '85%',
    position: 'absolute',
    marginTop: '6%',
  },
});
