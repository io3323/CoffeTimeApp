import {StyleSheet, Text, View} from 'react-native';
import {light} from '../../../../../themeNameApp';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';
import {FC} from 'react';
import {Color} from '../../../../../Color';

type TextProductOrderModel = {
  productName: string;
};

const {color} = Color.orderColorObject.textProductOrder;
export const TextProductOrderComponent: FC<TextProductOrderModel> = ({
  productName,
}) => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View style={styles.textProductContainer}>
      <Text
        style={
          themeState.theme == light
            ? styles.textNameProductLight
            : styles.textNameProductDark
        }
        adjustsFontSizeToFit={true}>
        {productName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textProductContainer: {
    width: 170,
    height: 30,
  },
  textNameProductLight: {
    fontSize: 20,
    marginTop: 5,
    fontFamily: 'Lobster-Regular',
    color: color.light,
  },
  textNameProductDark: {
    fontSize: 20,
    marginTop: 5,
    fontFamily: 'Lobster-Regular',
    color: color.dark,
  },
});
