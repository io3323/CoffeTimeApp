import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
export let CURENT_WIDTH = 0;
if (width > 400) {
  CURENT_WIDTH = 190;
} else if (width < 400 && width > 380) {
  CURENT_WIDTH = 180;
} else if (width <= 380) {
  CURENT_WIDTH = 170;
}
