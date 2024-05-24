import { Text, View } from 'react-native';
import { useState } from 'react';

import SelectionButton from '../../ui/customSelectionButton/SelectionButton/SelectionButton';

import styles from './propertyTypeStyles';

const PropertyType = () => {
  const [typeOfHousing, setTypeOfHousing] = useState([]);

  const handleTypeOfHousingSelection = (housingType, isSelected) => {
    if (isSelected) {
      setTypeOfHousing([...typeOfHousing, housingType]);
    } else {
      setTypeOfHousing(typeOfHousing.filter((type) => type !== housingType));
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.button}>
        <SelectionButton
          text="Plots"
          setNumberOfRooms={handleTypeOfHousingSelection}
        />
      </View>
      <View style={styles.button}>
        <SelectionButton
          text="Townhouse"
          setNumberOfRooms={handleTypeOfHousingSelection}
        />
      </View>
      <View style={styles.button}>
        <SelectionButton
          text="Villa"
          setNumberOfRooms={handleTypeOfHousingSelection}
        />
      </View>
      <View style={styles.button}>
        <SelectionButton
          text="Apartments"
          setNumberOfRooms={handleTypeOfHousingSelection}
        />
      </View>
    </View>
  );
};

export default PropertyType;
