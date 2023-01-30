import {StyleSheet, Text, View} from 'react-native';
import {light} from '../../../../../themeNameApp';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';
import {FC} from 'react';
type CounterShopModel = {
  count: number;
};
export const CounterShopComponent: FC<CounterShopModel> = ({count}) => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View style={styles.countContainer}>
      <Text
        style={
          themeState.theme == light ? styles.counterLight : styles.counterDark
        }
        adjustsFontSizeToFit={true}>
        {count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  countContainer: {
    width: 35,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterLight: {
    fontSize: 30,
    color: '#474747',
  },
  counterDark: {
    fontSize: 30,
    color: 'white',
  },
});
