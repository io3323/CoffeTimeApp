import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {light} from '../../../themeNameApp';

export const FooterComponent = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View
      style={[
        styles.footerStyle,
        themeState.theme == light ? styles.colorLight : styles.colorDark,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  footerStyle: {
    marginBottom: '8%',
    width: '100%',
    height: '10%',
    backgroundColor: '#f2f2f2',
  },
  colorLight: {
    backgroundColor: '#f2f2f2',
  },
  colorDark: {
    backgroundColor: '#534965',
  },
});
