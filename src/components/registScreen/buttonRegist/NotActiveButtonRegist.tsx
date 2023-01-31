import {StyleSheet, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Color} from '../../../Color';

const {color, borderColor, textColor} = Color.regComponent.notActiveButton;
export const NotActiveButtonRegist = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.buttonLoginNoActive}>
      <Text style={styles.buttonTextLogin}>
        {t('common:registScreen:button')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLoginNoActive: {
    marginTop: 23.5,
    borderStyle: 'solid',
    borderRadius: 40,
    backgroundColor: color,
    borderColor: borderColor,
    borderWidth: 1,
    width: 300,
    height: 52,
  },
  buttonTextLogin: {
    fontSize: 18,
    fontFamily: 'Helvetica',
    color: textColor,
    textAlign: 'center',
    marginTop: 15,
  },
});
