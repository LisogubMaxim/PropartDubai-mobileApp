import { Text, View } from 'react-native';
import { useState } from 'react';

import { RangeDropDown } from './RangeDropDown/RangeDropDown';

import styles from './rangeStyles';
import LineSvg from '../../../../assets/svg/LineSvg';

const Range = ({ onChange, options, selectedValues }) => {
  // const values = ['150K', '250K', '500K', '1M', '5M', 'Unlimited'];

  const [minValue, setMinValue] = useState('0');
  const [maxValue, setMaxValue] = useState('0');

  // console.log(`min: ${minValue}; max: ${maxValue}`);

  const handleMinChange = (value) => {
    setMinValue(value);
    // onChange({ min: value, max: maxValue });
    // console.log(selectedValues);
  };

  const handleMaxChange = (value) => {
    setMaxValue(value);
    // onChange({ min: minValue, max: value });
  };

  return (
    <View style={styles.range}>
      <RangeDropDown
        onChangeValue={handleMinChange}
        values={options}
        rangeType="Min"
        defaultValue={options[0]}
      />
      <LineSvg />
      <RangeDropDown
        onChangeValue={handleMaxChange}
        values={options}
        minValue={minValue}
        rangeType="Max"
        defaultValue={options[options.length - 1]}
      />
    </View>
  );
};

export default Range;
