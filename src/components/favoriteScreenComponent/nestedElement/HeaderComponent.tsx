import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {light} from '../../../themeNameApp';

export const HeaderComponent = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View
      style={[
        styles.headerStyle,
        themeState.theme == light ? styles.colorLight : styles.colorDark,
      ]}
    />
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    width: '100%',
    height: '1%',
    backgroundColor: '#f2f2f2',
  },
  colorLight: {
    backgroundColor: '#f2f2f2',
  },
  colorDark: {
    backgroundColor: '#534965',
  },
});
