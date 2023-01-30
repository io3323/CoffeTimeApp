import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';
import {light} from '../../../../../themeNameApp';
import {IncrementButton} from './nestedButtonElement/IncrementButton';
import {DecrementButton} from './nestedButtonElement/DecrementButton';
import {TextBlockButtonDetailElement} from './nestedButtonElement/TextBlockButtonDetailElement';
import {TextCounterDetailElement} from './nestedButtonElement/TextCounterDetailElement';
export const PayButtonActiveState = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View
      style={
        themeState.theme == light ? styles.conteinerLight : styles.conteinerDark
      }>
      <TextBlockButtonDetailElement />
      <DecrementButton />
      <TextCounterDetailElement />
      <IncrementButton />
    </View>
  );
};
const styles = StyleSheet.create({
  conteinerLight: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#C8D9AF',
    width: 215,
    height: 41,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: 60,
  },
  conteinerDark: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#bbb8ee',
    width: 215,
    height: 41,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: 60,
  },
});
