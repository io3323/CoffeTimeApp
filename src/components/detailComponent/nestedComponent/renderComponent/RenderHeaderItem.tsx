import {Animated, StyleSheet} from 'react-native';
import {ImageDetailComponent} from '../ImageDetailComponent';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {FC} from 'react';
import {RenderHeaderModel} from '../../../../externalFunctions/detailScreen/createRenderHeaderItem';
let HEADER_MAX_HEIGHT = 0;
export const RenderHeaderItem: FC<RenderHeaderModel> = props => {
  const {HEADER_SCROLL_DISTANCE, HEADER_MAX_HEIGHT_DEC, scrollY} =
    props.renderModel;
  HEADER_MAX_HEIGHT = HEADER_MAX_HEIGHT_DEC;
  const cafeInfoState = useSelector((state: RootState) => state.cafeInfoState);
  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });
  const imageTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });
  return (
    <Animated.View
      style={[
        styles.headerBackground,
        {
          opacity: imageOpacity,
          transform: [{translateY: imageTranslateY}],
        },
      ]}>
      <ImageDetailComponent
        images={cafeInfoState.images}
        name={cafeInfoState.name}
        address={cafeInfoState.address}
      />
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
});
