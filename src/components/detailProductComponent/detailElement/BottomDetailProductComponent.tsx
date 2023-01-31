import {light} from '../../../themeNameApp';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {TextPriceContainer} from './nestedDetailElement/bottomDetailElement/TextPriceContainer';
import {IconPriceContainer} from './nestedDetailElement/bottomDetailElement/IconPriceContainer';
import {PayButtonDetailElement} from './nestedDetailElement/bottomDetailElement/PayButtonDetailElement';
import {Color} from '../../../Color';

const {bottomContainer, separator} =
  Color.detailProductColorObject.bottomDetailComponent;
export const BottomDetailProductComponent = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View style={styles.bottomGlobalContainer}>
      <View
        style={
          themeState.theme == light
            ? styles.bottomContainerLight
            : styles.bottomContainerDark
        }>
        <View
          style={
            themeState.theme == light
              ? styles.separatorLight
              : styles.separatorDark
          }
        />
        <View style={styles.priceContainer}>
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
  bottomContainerLight: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: bottomContainer.light,
    width: '100%',
    flex: 1.5,
  },
  bottomContainerDark: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: bottomContainer.dark,
    width: '100%',
    flex: 1.5,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '3.1%',
    marginTop: '2.8%',
  },
  separatorLight: {
    borderColor: separator.light,
    borderWidth: 1,
    width: 340,
  },
  separatorDark: {
    borderColor: separator.dark,
    borderWidth: 1,
    width: 340,
  },
});
