import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {Image, StyleSheet, View} from 'react-native';
import {light} from '../../../../../themeNameApp';
import goIcon from '../../../../../assets/image/listScreen/goIcon.png';
import goIconDark from '../../../../../assets/image/listScreen/goIconDark.png';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/reduxStore/store';
import {WIDTH_APP} from '../../../../../definitionSize';
import {colorFlatListObject} from '../../../colorFlatListObject';
import {FC} from 'react';
type DescriptionIconCardListModel = {
  progress: Animated.SharedValue<number>;
};
export const DescriptionIconCardListElement: FC<
  DescriptionIconCardListModel
> = ({progress}) => {
  const {t} = useTranslation();
  const themeState = useSelector((state: RootState) => state.themeState);
  const rStyleTextColorInfo = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [colorFlatListObject.textLight, colorFlatListObject.textDark],
    );
    return {
      color: color,
    };
  });
  return (
    <View style={styles.conteinerGoIcon}>
      <Animated.Text style={rStyleTextColorInfo}>
        {t('common:listScreen:descriptionInfo')}
      </Animated.Text>
      <Image
        style={themeState.theme == light ? styles.iconLight : styles.iconDark}
        source={themeState.theme == light ? goIcon : goIconDark}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conteinerGoIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: WIDTH_APP * 0.65,
  },
  iconLight: {
    width: 32,
    height: 32,
    marginTop: -6,
    marginLeft: -5,
  },
  iconDark: {
    width: 15,
    height: 15,
    marginTop: 4,
    marginLeft: 10,
    right: 5,
  },
});
