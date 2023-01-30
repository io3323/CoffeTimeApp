import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {AttributeImageDetail} from './nestedDetailElement/atributeDetailElement/AttributeImageDetail';
import {AttributeTextDetailElement} from './nestedDetailElement/atributeDetailElement/AttributeTextDetailElement';
import {DescriptionTextDetailElement} from './nestedDetailElement/atributeDetailElement/DescriptionTextDetailElement';

export const AtributeDetailComponent = () => {
  useSelector((state: RootState) => state.infoProductCoffeState);
  useSelector((state: RootState) => state.themeState);
  return (
    <View style={styles.container}>
      <View>
        <AttributeImageDetail />
        <AttributeTextDetailElement />
        <DescriptionTextDetailElement />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: '5.9%',
  },
});
