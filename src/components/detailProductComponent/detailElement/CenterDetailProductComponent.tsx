import {StyleSheet, View} from 'react-native';
import {CenterTextContainer} from './nestedDetailElement/centerDetailElement/CenterTextContainer';
import {FavoriteIconDetailElement} from './nestedDetailElement/centerDetailElement/FavoriteIconDetailElement';

export const CenterDetailProductComponent = () => {
  return (
    <View style={styles.centerContainer}>
      <CenterTextContainer />
      <FavoriteIconDetailElement />
    </View>
  );
};

const styles = StyleSheet.create({
  centerContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '6%',
    marginLeft: '6%',
  },
});
