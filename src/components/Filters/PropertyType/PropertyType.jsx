import React from 'react';
import { View } from 'react-native';

import SelectionButton from '../../ui/customSelectionButton/SelectionButton/SelectionButton';

import styles from './propertyTypeStyles';

const PropertyType = ({ options, onChange, selectedValues, clearAll }) => {
  const handleTypeOfProperty = (housingType, isSelected) => {
    if (isSelected) {
      onChange([...selectedValues, housingType]);
    } else {
      onChange(selectedValues.filter((type) => type !== housingType));
    }
  };

  return (
    <View style={styles.body}>
      {options.map((property, idx) => (
        <View style={styles.button} key={idx}>
          <SelectionButton
            clearAll={clearAll}
            text={property.label}
            setNumberOfRooms={handleTypeOfProperty}
          />
        </View>
      ))}
    </View>
  );
};

export default PropertyType;
