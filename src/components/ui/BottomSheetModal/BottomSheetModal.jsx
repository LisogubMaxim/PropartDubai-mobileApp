import React from 'react';
import { Modal, View } from 'react-native';

const BottomSheetModal = ({ visible, children }) => {
  return (
    <Modal animationType="slide" visible={visible}>
      {children}
    </Modal>
  );
};

export default BottomSheetModal;
