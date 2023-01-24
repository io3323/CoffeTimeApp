import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import openEye from '../../../../assets/image/authScreen/openEye.png';
import closeEye from '../../../../assets/image/authScreen/closeEye.png';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {changeSecureState} from '../../../../redux/reduxStateSlice/securePasswordSlice';

export const EyeIcon = () => {
  const securePasswordState = useSelector(
    (state: RootState) => state.securePasswordState,
  );
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={styles.eyeConeiner}
      onPress={() => dispatch(changeSecureState())}>
      <Image
        source={securePasswordState.secureState ? closeEye : openEye}
        style={
          securePasswordState.secureState
            ? styles.closeEyeIcon
            : styles.openEyeIcon
        }
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  openEyeIcon: {
    width: 35,
    height: 35,
  },
  closeEyeIcon: {
    width: 35,
    height: 35,
  },
  eyeConeiner: {
    position: 'absolute',
    marginTop: 0,
    right: '1%',
  },
});
