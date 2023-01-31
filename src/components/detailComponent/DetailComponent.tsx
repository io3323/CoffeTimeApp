import {Animated, LogBox, SafeAreaView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/reduxStore/store';
import {useRef} from 'react';
import {light} from '../../themeNameApp';
import {RenderFlatList} from './nestedComponent/renderComponent/RenderFlatList';
import {RenderHeaderItem} from './nestedComponent/renderComponent/RenderHeaderItem';
import {createRenderHeaderItem} from '../../externalFunctions/detailScreen/createRenderHeaderItem';
import {Color} from '../../Color';
LogBox.ignoreLogs(['source.uri']);
const HEADER_MIN_HEIGHT = 50;
const HEADER_MAX_HEIGHT = 320;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
export const DetailComponent = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <SafeAreaView
      style={
        themeState.theme == light
          ? styles.mainContainerLight
          : styles.mainContainerDark
      }>
      <Animated.ScrollView
        contentContainerStyle={
          themeState.theme == light
            ? styles.contentContainerStyleLight
            : styles.contentContainerStyleDark
        }
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}>
        <RenderFlatList />
      </Animated.ScrollView>
      <Animated.View
        style={[styles.header, {transform: [{translateY: headerTranslateY}]}]}>
        <RenderHeaderItem
          renderModel={createRenderHeaderItem(
            HEADER_SCROLL_DISTANCE,
            HEADER_MAX_HEIGHT,
            scrollY,
          )}
        />
      </Animated.View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainerLight: {
    backgroundColor:
      Color.detailColorObject.mainContainer.backgroundColor.light,
  },
  mainContainerDark: {
    backgroundColor: Color.detailColorObject.mainContainer.backgroundColor.dark,
  },
  contentContainerStyleLight: {
    paddingTop: HEADER_MAX_HEIGHT - 32,
  },
  contentContainerStyleDark: {
    paddingTop: HEADER_MAX_HEIGHT - 32,
  },
  header: {
    position: 'absolute',
    top: -50,
    left: 0,
    right: 0,
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },
});
