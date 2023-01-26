import {ReactElement, useEffect} from 'react';
import {Keyboard, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {changeKeyboardState} from '../../redux/reduxStateSlice/keyboardStatusSlice';

export const KeyboardCheck = ({children}: {children: ReactElement}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      dispatch(changeKeyboardState({keyboardStatus: true}));
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      dispatch(changeKeyboardState({keyboardStatus: false}));
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  });
  return <View>{children}</View>;
};
