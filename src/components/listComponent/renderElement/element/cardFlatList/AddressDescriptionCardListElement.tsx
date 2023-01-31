import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {useTranslation} from 'react-i18next';
import {StyleSheet} from 'react-native';
import {FC} from 'react';
import {Color} from '../../../../../Color';
type AddressCardListModel = {
  progress: Animated.SharedValue<number>;
};

const {colorMas} = Color.listColorObject.addressDescription;
export const AddressDescriptionCardListElement: FC<AddressCardListModel> = ({
  progress,
}) => {
  const {t} = useTranslation();
  const rStyleTextColorDesc = useAnimatedStyle(() => {
    const color = interpolateColor(progress.value, [0, 1], colorMas);
    return {
      color: color,
    };
  });
  return (
    <Animated.Text style={[styles.addressDescription, rStyleTextColorDesc]}>
      {t('common:listScreen:descriptionLocate')}
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  addressDescription: {
    fontSize: 14,
    marginTop: 15,
    marginLeft: 14,
  },
});
