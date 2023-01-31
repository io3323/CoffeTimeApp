import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {light} from '../../../themeNameApp';
import {Color} from '../../../Color';

const {color, headerStyle} = Color.favoriteColorObject.headerComponent;
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
    backgroundColor: headerStyle,
  },
  colorLight: {
    backgroundColor: color.light,
  },
  colorDark: {
    backgroundColor: color.dark,
  },
});
