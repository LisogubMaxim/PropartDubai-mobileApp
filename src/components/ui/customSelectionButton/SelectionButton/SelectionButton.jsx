import { Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';

import styles from './selectionButtonStyles';

const SelectionButton = ({ text, setNumberOfRooms, clearAll }) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(false);
  }, [clearAll]);

  const handlePress = () => {
    setIsSelected(!isSelected);
    setNumberOfRooms(text, !isSelected);
  };

  const buttonStyle = {
    backgroundColor: isSelected ? '#333863' : null,
    borderColor: isSelected ? '#333863' : '#CFCFD3',
  };

  return (
    <TouchableOpacity
      style={[buttonStyle, styles.button]}
      onPress={handlePress}>
      <Text
        style={[
          styles.textSelectionButton,
          { color: isSelected ? '#ffffff' : '#0F1121' },
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default SelectionButton;
