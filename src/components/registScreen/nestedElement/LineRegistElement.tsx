import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {light} from '../../../themeNameApp';
import {Color} from '../../../Color';

const {color} = Color.regComponent.lineRegComponent;
export const LineRegistElement = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View
      style={[
        styles.line,
        {
          backgroundColor: themeState.theme == light ? color.light : color.dark,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  line: {
    width: '65%',
    height: 1,
    marginTop: 0,
  },
});
