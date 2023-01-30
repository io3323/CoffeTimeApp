import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';
import {light} from '../../../../../themeNameApp';

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
    color: '#474747',
    fontFamily: 'Lobster-Regular',
  },
  textHeaderDark: {
    fontSize: 28,
    color: 'white',
    fontFamily: 'Lobster-Regular',
  },
});
