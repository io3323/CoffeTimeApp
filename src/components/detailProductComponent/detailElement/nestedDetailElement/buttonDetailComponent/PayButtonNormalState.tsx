import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {addBasket} from '../../../../../redux/reduxStateSlice/basketUserSlice';
import {useDispatch, useSelector} from 'react-redux';
import {FunctionComponent} from 'react';
import {RootState} from '../../../../../redux/reduxStore/store';
import {light} from '../../../../../themeNameApp';
import {useTranslation} from 'react-i18next';
import {IButtonState} from '../../../../../externalFunctions/detailProductScreen/createNormalButtonData';
export const PayButtonNormalState: FunctionComponent<IButtonState> = ({
  infoProduct,
}) => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const {t} = useTranslation();
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={themeState.theme == light ? styles.buttonLight : styles.buttonDark}
      onPress={() => {
        dispatch(addBasket(infoProduct));
      }}>
      <Text style={styles.textButton}>
        {t('common:detailProductScreen:button')}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonLight: {
    width: 207,
    height: 41,
    backgroundColor: '#C8D9AF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 60,
  },
  buttonDark: {
    width: 207,
    height: 41,
    backgroundColor: '#bbb8ee',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 60,
  },
  textButton: {
    fontSize: 20,
    fontFamily: 'SFUIText-Regular',
    color: '#FFFFFF',
  },
});