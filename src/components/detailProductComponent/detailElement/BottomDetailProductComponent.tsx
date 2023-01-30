import {light} from '../../../themeNameApp';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {TextPriceContainer} from './nestedDetailElement/bottomDetailElement/TextPriceContainer';
import {IconPriceContainer} from './nestedDetailElement/bottomDetailElement/IconPriceContainer';
import {PayButtonDetailElement} from './nestedDetailElement/bottomDetailElement/PayButtonDetailElement';

export const BottomDetailProductComponent = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View style={styles.bottomGlobalContainer}>
      <View
        style={
          themeState.theme == light
            ? styles.bottomConteinerLight
            : styles.bottomConteinerDark
        }>
        <View
          style={
            themeState.theme == light
              ? styles.separatorLight
              : styles.separatorDark
          }
        />
        <View style={styles.priceConteiner}>
          <TextPriceContainer />
          <IconPriceContainer />
          <PayButtonDetailElement />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomGlobalContainer: {
    flex: 1,
  },
  bottomConteinerLight: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    width: '100%',
    flex: 1.5,
  },
  bottomConteinerDark: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#534965',
    width: '100%',
    flex: 1.5,
  },
  priceConteiner: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '3.1%',
    marginTop: '2.8%',
  },
  separatorLight: {
    borderColor: '#D8D8D8',
    borderWidth: 1,
    width: 340,
  },
  separatorDark: {
    borderColor: 'white',
    borderWidth: 1,
    width: 340,
  },
});
