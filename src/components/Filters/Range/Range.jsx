import { Text, View } from 'react-native';
import { useState } from 'react';

import { RangeDropDown } from './RangeDropDown/RangeDropDown';

import styles from './rangeStyles';
import LineSvg from '../../../../assets/svg/LineSvg';

const Range = ({ onChange, data }) => {
  // const values = ['150K', '250K', '500K', '1M', '5M', 'Unlimited'];

  const [minValue, setMinValue] = useState('0');
  const [maxValue, setMaxValue] = useState('0');

  const handleMinChange = (value) => {
    setMinValue(value);
    // onChange(value, maxValue);
  };

  const handleMaxChange = (value) => {
    setMaxValue(value);
    // onChange(minValue, value);
  };

  return (
    <View style={styles.range}>
      <RangeDropDown
        onChangeValue={handleMinChange}
        values={data}
        rangeType="Min"
        defaultValue={data[0]}
      />
      <LineSvg />
      <RangeDropDown
        onChangeValue={handleMaxChange}
        values={data}
        minValue={minValue}
        rangeType="Max"
        defaultValue={data[data.length - 1]}
      />
    </View>
  );
};

export default Range;
