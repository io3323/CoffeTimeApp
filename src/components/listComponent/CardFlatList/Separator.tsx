import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {light} from '../../../themeNameApp';

export const Separator = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View
      style={
        themeState.theme == light ? styles.separatopLight : styles.separatopDark
      }
    />
  );
};
const styles = StyleSheet.create({
  separatopLight: {
    backgroundColor: '#efefef',
    height: 10,
    width: '100%',
  },
  separatopDark: {
    backgroundColor: '#534965',
    height: 10,
    width: '100%',
  },
});
