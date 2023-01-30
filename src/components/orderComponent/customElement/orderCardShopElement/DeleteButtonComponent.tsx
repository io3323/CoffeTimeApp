import {deleteProduct} from '../../../../redux/reduxStateSlice/basketUserSlice';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import deleteIcon from '../../../../assets/image/detailProductScreen/delete.png';
import {useDispatch} from 'react-redux';
import {FC} from 'react';

type DeleteButtonModel = {
  id: string;
};
export const DeleteButtonComponent: FC<DeleteButtonModel> = ({id}) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={styles.deleteIconConteiner}
      onPress={() => dispatch(deleteProduct(id))}>
      <Image source={deleteIcon} style={styles.deleteIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  deleteIcon: {
    width: 26,
    height: 26,
  },
  deleteIconConteiner: {
    marginTop: 6,
    marginLeft: 30,
  },
});
