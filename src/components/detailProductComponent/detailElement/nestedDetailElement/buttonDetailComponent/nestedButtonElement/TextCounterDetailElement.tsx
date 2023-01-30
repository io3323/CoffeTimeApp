import {light} from '../../../../../../themeNameApp';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../../redux/reduxStore/store';

export const TextCounterDetailElement = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const basketObjectState = useSelector(
    (state: RootState) => state.basketObjectState,
  );
  return (
    <View
      style={
        themeState.theme == light
          ? styles.textConteinerLight
          : styles.textConteinerDark
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
    color: '#474747',
  },
  textCountDark: {
    fontSize: 35,
    color: 'white',
  },
  textConteinerLight: {
    backgroundColor: 'white',
    width: 50,
    height: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    flex: 1,
  },
  textConteinerDark: {
    backgroundColor: '#716388',
    width: 50,
    height: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    flex: 1,
  },
});
