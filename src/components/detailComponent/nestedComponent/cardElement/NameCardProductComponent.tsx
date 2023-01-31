import {StyleSheet, Text, View} from 'react-native';
import {light} from '../../../../themeNameApp';
import {Color} from '../../../../Color';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {useTranslation} from 'react-i18next';
import {FC} from 'react';
type NameCardProductType = {
  name: string;
};
export const NameCardProductComponent: FC<NameCardProductType> = ({name}) => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const {t} = useTranslation();
  return (
    <View style={styles.textContainer}>
      <Text
        style={themeState.theme == light ? styles.nameLight : styles.nameDark}>
        {name}
      </Text>
      <Text
        style={
          themeState.theme == light ? styles.phraseLight : styles.phraseDark
        }>
        {t('common:detailScreen:description')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    width: '100%',
    height: 65,
  },
  nameLight: {
    fontSize: 18,
    fontFamily: 'SFUIText-Bold',
    color: Color.detailColorObject.cardProductComponent.nameText.light,
    marginTop: 10,
    marginLeft: 10,
  },
  nameDark: {
    fontSize: 18,
    fontFamily: 'SFUIText-Bold',
    color: Color.detailColorObject.cardProductComponent.nameText.dark,
    marginTop: 10,
    marginLeft: 10,
  },
  phraseLight: {
    fontSize: 14,
    fontFamily: 'SFUIText-Regular',
    color: Color.detailColorObject.cardProductComponent.phraseColor.light,
    marginTop: 5,
    marginLeft: 10,
  },
  phraseDark: {
    fontSize: 14,
    fontFamily: 'SFUIText-Regular',
    color: Color.detailColorObject.cardProductComponent.phraseColor.dark,
    marginTop: 5,
    marginLeft: 10,
  },
});
