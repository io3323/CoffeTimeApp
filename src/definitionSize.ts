import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
export const HEIGHT_APP = height;
export const WIDTH_APP = width;
export let CURENT_WIDTH = 0;
export let SizePhoneStatus = true;
export let DETAIL_PRODUCT_IMAGE_HEIGHT = 0;
if (width > 400) {
  CURENT_WIDTH = 190;
  DETAIL_PRODUCT_IMAGE_HEIGHT = 380;
} else if (width < 400 && width > 380) {
  CURENT_WIDTH = 180;
  DETAIL_PRODUCT_IMAGE_HEIGHT = 310;
} else if (width <= 380) {
  CURENT_WIDTH = 170;
  DETAIL_PRODUCT_IMAGE_HEIGHT = 240;
}
if (HEIGHT_APP <= 667 && WIDTH_APP <= 375) {
  SizePhoneStatus = false;
}
