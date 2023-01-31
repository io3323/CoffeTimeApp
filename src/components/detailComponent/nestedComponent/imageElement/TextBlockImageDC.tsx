import {StyleSheet, Text, View} from 'react-native';
import {light} from '../../../../themeNameApp';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {FC} from 'react';
import {Color} from '../../../../Color';
type TextBlockImageType = {
  name: string;
  address: string;
};
export const TextBlockImageDC: FC<TextBlockImageType> = ({name, address}) => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View style={styles.mainBlockContainer}>
      <Text
        style={
          themeState.theme == light ? styles.textNameLight : styles.textNameDark
        }>
        {name}
      </Text>
      <Text
        style={
          themeState.theme == light
            ? styles.textAddressLight
            : styles.textAddressDark
        }>
        {address}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBlockContainer: {
    width: '85%',
  },
  textNameLight: {
    fontFamily: 'Lobster-Regular',
    fontSize: 28,
    color:
      Color.detailColorObject.cardProductComponent.textBlockImage.nameTextColor
        .light,
    marginTop: 220,
    marginLeft: 6,
  },
  textNameDark: {
    fontFamily: 'Lobster-Regular',
    fontSize: 28,
    color:
      Color.detailColorObject.cardProductComponent.textBlockImage.nameTextColor
        .dark,
    marginTop: 220,
    marginLeft: 6,
  },
  textAddressLight: {
    fontFamily: 'SFUIText-Regular',
    fontSize: 18,
    color:
      Color.detailColorObject.cardProductComponent.textBlockImage
        .addressTextColor.light,
    marginLeft: 6,
    marginTop: 10,
    height: 100,
  },
  textAddressDark: {
    fontFamily: 'SFUIText-Regular',
    fontSize: 18,
    color:
      Color.detailColorObject.cardProductComponent.textBlockImage
        .addressTextColor.dark,
    marginLeft: 6,
    marginTop: 10,
    height: 100,
  },
});
