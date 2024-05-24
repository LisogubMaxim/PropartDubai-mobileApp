import { View } from 'react-native';
import { useState } from 'react';

import SelectionButton from '../../ui/customSelectionButton/SelectionButton/SelectionButton';

import styles from './bedroomsStyles';

const Bedrooms = ({ onChange, selectedValues, clearAll }) => {
  // const [numberOfRooms, setNumberOfRooms] = useState([]);

  const handleNumberOfBedrooms = (number, isSelected) => {
    if (isSelected) {
      onChange([...selectedValues, number]);
    } else {
      onChange(selectedValues.filter((type) => type !== number));
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.row}>
          <SelectionButton
            clearAll={clearAll}
            text="1"
            setNumberOfRooms={handleNumberOfBedrooms}
          />
          <SelectionButton
            clearAll={clearAll}
            text="2"
            setNumberOfRooms={handleNumberOfBedrooms}
          />
          <SelectionButton
            clearAll={clearAll}
            text="3"
            setNumberOfRooms={handleNumberOfBedrooms}
          />
          <SelectionButton
            clearAll={clearAll}
            text="4"
            setNumberOfRooms={handleNumberOfBedrooms}
          />
        </View>
        <View style={styles.row}>
          <SelectionButton
            clearAll={clearAll}
            text="4+"
            setNumberOfRooms={handleNumberOfBedrooms}
          />
          <View style={styles.doubleButton}>
            <SelectionButton
              clearAll={clearAll}
              text="Studio"
              setNumberOfRooms={handleNumberOfBedrooms}
            />
          </View>
          <View style={styles.pass}></View>
        </View>
      </View>
    </View>
  );
};

export default Bedrooms;
