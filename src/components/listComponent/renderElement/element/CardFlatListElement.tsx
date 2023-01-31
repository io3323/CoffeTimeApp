import Animated, {useDerivedValue, withSpring} from 'react-native-reanimated';
import {StyleSheet} from 'react-native';
import {light} from '../../../../themeNameApp';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {ItemModelList} from '../ListRenderIOSComponent';
import {FC} from 'react';
import {NameCardListElement} from './cardFlatList/NameCardListElement';
import {AddressDescriptionCardListElement} from './cardFlatList/AddressDescriptionCardListElement';
import {AddressCardListElement} from './cardFlatList/AddressCardListElement';
import {DescriptionIconCardListElement} from './cardFlatList/DescriptionIconCardListElement';
type CardFlatListModel = {
  listItem: ItemModelList;
};
export const CardFlatListElement: FC<CardFlatListModel> = props => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const progress = useDerivedValue(() =>
    themeState.theme == light ? withSpring(0) : withSpring(1),
  );
  return (
    <Animated.View style={styles.view}>
      <NameCardListElement progress={progress} name={props.listItem.name} />
      <AddressDescriptionCardListElement progress={progress} />
      <AddressCardListElement
        progress={progress}
        address={props.listItem.address}
      />
      <DescriptionIconCardListElement progress={progress} />
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  view: {
    height: 146,
    width: 259,
    alignItems: 'flex-start',
  },
});
