import React, { useEffect, useRef, useState } from 'react';
import { Modal, Animated, Dimensions, Easing } from 'react-native';

const { width } = Dimensions.get('window');

const RightSheetModal = ({ visible, children }) => {
  const [showModal, setShowModal] = useState(visible);
  const translateX = useRef(new Animated.Value(width)).current;

  useEffect(() => {
    if (visible) {
      setShowModal(true);
      Animated.timing(translateX, {
        toValue: 0,
        duration: 300,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateX, {
        toValue: width,
        duration: 300,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }).start(() => setShowModal(false));
    }
  }, [visible]);

  return (
    <Modal animationType="none" visible={showModal} transparent={true}>
      <Animated.View style={{ transform: [{ translateX }] }}>
        {children}
      </Animated.View>
    </Modal>
  );
};

export default RightSheetModal;
