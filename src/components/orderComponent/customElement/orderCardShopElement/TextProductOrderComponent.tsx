import {StyleSheet, Text, View} from 'react-native';
import {light} from '../../../../themeNameApp';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {FC} from 'react';

type TextProductOrderModel = {
  productName: string;
};
export const TextProductOrderComponent: FC<TextProductOrderModel> = ({
  productName,
}) => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View style={styles.textProductConteiner}>
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
  textProductConteiner: {
    width: 170,
    height: 30,
  },
  textNameProductLight: {
    fontSize: 20,
    marginTop: 5,
    fontFamily: 'Lobster-Regular',
    color: '#474747',
  },
  textNameProductDark: {
    fontSize: 20,
    marginTop: 5,
    fontFamily: 'Lobster-Regular',
    color: 'white',
  },
});
