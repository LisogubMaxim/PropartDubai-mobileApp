import React, { useState } from 'react';
import { View } from 'react-native';

import { RangeDropDown } from './RangeDropDown/RangeDropDown';

import LineSvg from '../../../../assets/svg/LineSvg';

import styles from './rangeStyles';

const Range = ({ onChange, options, clearAll }) => {
  const [minValue, setMinValue] = useState('0');
  const [maxValue, setMaxValue] = useState('0');

  const handleMinChange = (value) => {
    setMinValue(value);
    onChange({ min: value, max: maxValue });
  };

  const handleMaxChange = (value) => {
    setMaxValue(value);
    onChange({ min: minValue, max: value });
  };

  return (
    <View style={styles.range}>
      <RangeDropDown
        onChangeValue={handleMinChange}
        values={options}
        rangeType="Min"
        defaultValue={options[0]}
        clearAll={clearAll}
      />
      <LineSvg />
      <RangeDropDown
        onChangeValue={handleMaxChange}
        values={options}
        minValue={minValue}
        rangeType="Max"
        defaultValue={options[options.length - 1]}
        clearAll={clearAll}
      />
    </View>
  );
};

export default Range;
