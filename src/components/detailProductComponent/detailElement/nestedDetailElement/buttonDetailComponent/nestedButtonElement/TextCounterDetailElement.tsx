import {light} from '../../../../../../themeNameApp';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../../redux/reduxStore/store';
import {Color} from '../../../../../../Color';

const {textContainer, textCount} =
  Color.detailProductColorObject.textCountDetail;
export const TextCounterDetailElement = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const basketObjectState = useSelector(
    (state: RootState) => state.basketObjectState,
  );
  return (
    <View
      style={
        themeState.theme == light
          ? styles.textContainerLight
          : styles.textContainerDark
      }>
      <Text
        style={
          themeState.theme == light
            ? styles.textCountLight
            : styles.textCountDark
        }
        adjustsFontSizeToFit={true}>
        {basketObjectState.count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textCountLight: {
    fontSize: 35,
    color: textCount.light,
  },
  textCountDark: {
    fontSize: 35,
    color: textCount.dark,
  },
  textContainerLight: {
    backgroundColor: textContainer.light,
    width: 50,
    height: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    flex: 1,
  },
  textContainerDark: {
    backgroundColor: textContainer.dark,
    width: 50,
    height: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    flex: 1,
  },
});
