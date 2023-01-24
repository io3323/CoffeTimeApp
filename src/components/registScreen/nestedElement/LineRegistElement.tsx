import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {light} from '../../../themeNameApp';
import {inputRegistColorObject} from '../inputFormRegist/registInputElement/colorRegistObject/inputRegistColorObject';

export const LineRegistElement = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View
      style={[
        styles.line,
        {
          backgroundColor:
            themeState.theme == light
              ? inputRegistColorObject.lineRegistColorLight
              : inputRegistColorObject.lineRegistColorDark,
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
