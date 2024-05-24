import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ScrollView,
} from 'react-native';
import { useEffect, useRef, useState } from 'react';

import ArrowDownSvg from '../../../../../assets/svg/ArrowDownSvg';

import styles from './rangeStyles';

export const RangeDropDown = ({
  onChangeValue,
  values,
  minValue = '0',
  rangeType = '',
  defaultValue,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState(minValue);

  const moreThanMinimum =
    minValue && minValue !== '0'
      ? values.slice(values.indexOf(minValue) + 1)
      : values;

  const handleOpenContainer = () => {
    setIsActive(!isActive);
  };

  const handleChangeValue = (item) => {
    onChangeValue(item);
    setSelectedValue(item);
    setIsActive(!isActive);
    console.log(item);
  };

  useEffect(() => {
    if (minValue === 'Unlimited') {
      setSelectedValue('Unlimited');
      onChangeValue('Unlimited');
    } else if (
      minValue !== '0' &&
      values.indexOf(minValue) >= values.indexOf(selectedValue)
    )
      setSelectedValue(values[values.indexOf(minValue) + 1]);
  }, [selectedValue, minValue]);

  // console.log(selectedValue);

  return (
    <View style={[styles.rangeContainer, isActive ? styles.rangeActive : '']}>
      <TouchableOpacity style={styles.range} onPress={handleOpenContainer}>
        <View>
          <Text style={styles.rangeTypeText}>{rangeType}</Text>
          <Text
            style={[
              styles.text,
              selectedValue !== '0' && { color: '#0F1121' },
            ]}>
            {selectedValue !== '0' ? selectedValue : defaultValue}
          </Text>
        </View>
      </TouchableOpacity>
      {isActive && (
        <ScrollView style={styles.container}>
          {moreThanMinimum.map((item, index) => (
            <View key={index} style={styles.value}>
              <TouchableOpacity
                style={styles.buttonValue}
                onPress={() => handleChangeValue(item)}>
                <Text style={styles.textValue}>{item}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};
