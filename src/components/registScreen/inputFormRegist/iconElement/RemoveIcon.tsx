import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import removeIcon from '../../../../assets/image/authScreen/removeIcon.png';
import {
  addUserEmailProfile,
  addUserNameProfile,
  addUserPasswordProfile,
} from '../../../../redux/reduxStateSlice/userInfoSlice';
import {useDispatch} from 'react-redux';
import {FunctionComponent} from 'react';
import {modelTypesObject} from '../modelTypesObject';
type ModelRemoveFC = {
  typeReq: string;
};
export const RemoveIcon: FunctionComponent<ModelRemoveFC> = ({typeReq}) => {
  const dispatch = useDispatch();
  return (
    <View>
      {typeReq === modelTypesObject.Name_User && (
        <TouchableOpacity
          onPress={() => dispatch(addUserNameProfile({userName: ''}))}>
          <Image style={styles.removeIcon} source={removeIcon} />
        </TouchableOpacity>
      )}
      {typeReq === modelTypesObject.Email_User && (
        <TouchableOpacity
          onPress={() => dispatch(addUserEmailProfile({userEmail: ''}))}>
          <Image style={styles.removeIcon} source={removeIcon} />
        </TouchableOpacity>
      )}
      {typeReq === modelTypesObject.Password_User && (
        <TouchableOpacity
          onPress={() => dispatch(addUserPasswordProfile({userPassword: ''}))}>
          <Image style={styles.removeIcon} source={removeIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  removeIcon: {
    position: 'absolute',
    width: 50,
    height: 25,
    top: '15%',
    marginLeft: '50%',
  },
});
