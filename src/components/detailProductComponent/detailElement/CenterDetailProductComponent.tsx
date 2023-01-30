import {StyleSheet, View} from 'react-native';
import {CenterTextContainer} from './nestedDetailElement/centerDetailElement/CenterTextContainer';
import {FavoriteIconDetailElement} from './nestedDetailElement/centerDetailElement/FavoriteIconDetailElement';

export const CenterDetailProductComponent = () => {
  return (
    <View style={styles.centerConteiner}>
      <CenterTextContainer />
      <FavoriteIconDetailElement />
    </View>
  );
};

const styles = StyleSheet.create({
  centerConteiner: {
    display: 'flex',
    flexDirection: 'row',
    height: '6%',
    marginLeft: '6%',
  },
});
