import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';
import {light} from '../../../../../themeNameApp';
import {IncrementButton} from './nestedButtonElement/IncrementButton';
import {DecrementButton} from './nestedButtonElement/DecrementButton';
import {TextBlockButtonDetailElement} from './nestedButtonElement/TextBlockButtonDetailElement';
import {TextCounterDetailElement} from './nestedButtonElement/TextCounterDetailElement';
import {Color} from '../../../../../Color';

const {color} = Color.detailProductColorObject.activeButton;
export const DetailProductActiveButton = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View
      style={
        themeState.theme == light ? styles.containerLight : styles.containerDark
      }>
      <TextBlockButtonDetailElement />
      <DecrementButton />
      <TextCounterDetailElement />
      <IncrementButton />
    </View>
  );
};
const styles = StyleSheet.create({
  containerLight: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: color.light,
    width: 215,
    height: 41,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: 60,
  },
  containerDark: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: color.dark,
    width: 215,
    height: 41,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: 60,
  },
});
