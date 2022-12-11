import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-eva-icons';
import {FunctionComponent} from 'react';
import {
  deleteProduct,
  IBasketUser,
} from '../../../redux/reduxStateSlice/basketUserSlice';
import {useDispatch} from 'react-redux';
export type ItemModel = {
  item: IBasketUser;
};
export type HiddenEllement = {
  data: ItemModel;
  rowMap: any;
};
export const HiddenEllement: FunctionComponent<HiddenEllement> = ({
  data,
  rowMap,
}) => {
  const dispatch = useDispatch();
  const onClose = () => {
    rowMap[data.item.id].closeRow();
  };
  const onDelete = () => {
    dispatch(deleteProduct(data.item.id));
  };
  return (
    <View style={styles.rowBack}>
      <Text>Left</Text>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => onClose()}>
        <View style={styles.backBtnInner}>
          <Icon
            name={'arrow-back-outline'}
            fill={'#fff'}
            width={26}
            height={26}
          />
          <Text style={styles.backBtnText}>Close</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => onDelete()}>
        <View style={styles.backBtnInner}>
          <Icon name={'trash-2-outline'} fill={'#fff'} width={26} height={26} />
          <Text style={styles.backBtnText}>Delete</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    margin: 30,
    marginBottom: 15,
    borderRadius: 5,
  },
  backBtn: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    justifyContent: 'center',
  },
  backRightBtn: {
    alignItems: 'flex-end',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    paddingRight: 17,
  },
  backRightBtnLeft: {
    backgroundColor: '#4c4cff',
    right: 75,
  },
  backBtnInner: {
    alignItems: 'center',
  },
  backBtnText: {
    color: 'white',
    marginTop: 2,
  },
  backRightBtnRight: {
    backgroundColor: '#cc0000',
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
