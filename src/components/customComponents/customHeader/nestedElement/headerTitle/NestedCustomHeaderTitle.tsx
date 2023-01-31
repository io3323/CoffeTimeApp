import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';
import {light} from '../../../../../themeNameApp';
import {Color} from '../../../../../Color';

export const NestedCustomHeaderTitle = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View>
      <Text
        style={
          themeState.theme == light
            ? styles.textHeaderLight
            : styles.textHeaderDark
        }>
        CoffeTime
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textHeaderLight: {
    fontSize: 28,
    color: Color.headerColorObject.mainComponent.colorText.light,
    fontFamily: 'Lobster-Regular',
  },
  textHeaderDark: {
    fontSize: 28,
    color: Color.headerColorObject.mainComponent.colorText.dark,
    fontFamily: 'Lobster-Regular',
  },
});
