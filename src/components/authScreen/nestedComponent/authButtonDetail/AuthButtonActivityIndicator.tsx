import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {light} from '../../../../themeNameApp';

export const AuthButtonActivityIndicator = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const indicatorButtonState = useSelector(
    (state: RootState) => state.indicatorButtonState,
  );
  return (
    <View>
      {indicatorButtonState.active && (
        <View
          style={[
            styles.buttonIndicator,
            themeState.theme == light ? styles.colorLight : styles.colorDark,
          ]}>
          <ActivityIndicator color={'white'} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderRadius: 40,
    borderWidth: 1,
    width: 300,
    height: 52,
  },
  colorLight: {
    backgroundColor: '#bdbbbb',
    borderColor: '#BDBBBBFF',
  },
  colorDark: {
    backgroundColor: '#bdbbbb',
    borderColor: '#BDBBBBFF',
  },
});
