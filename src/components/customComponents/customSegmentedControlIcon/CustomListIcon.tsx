import { Image, StyleSheet, View } from "react-native";
// @ts-ignore
import listIcon from '../../../assets/image/mainScreen/segmentControlIcon/listIcon.png';
export const CustomListIcon = () => {
  return (
    <View style={styles.conteiner}>
      <Image source={listIcon} style={styles.list}/>
    </View>
  );
};

const styles = StyleSheet.create({
  list:{
    width:45,
    height:20,
  },
  conteiner:{
    marginTop:6,
    marginRight: 11,
  },
})
