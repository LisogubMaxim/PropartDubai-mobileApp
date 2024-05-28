import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, ScrollView, Image } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import Plan from './Plan';
import CheckedIconSvg from '../../../../assets/svg/CheckedIconSvg';
import ArrowDownSvg from '../../../../assets/svg/ArrowDownSvg';
import infoIcon from '../../../../assets/images/infoIcon.png';

import propertyStyles from '../propertyStyles'
import styles from './floorPlansStyles'

const FloorPlans = ({ plansData, handleSelectPlan }) => {
  const [selectedRooms, setSelectedRooms] = useState();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (plansData && Object.keys(plansData).length) {
      const newOptions = [];

      for (const option of Object.keys(plansData)) {
        newOptions.push({ label: option, value: option });
      }

      setOptions(newOptions);
      setSelectedRooms(newOptions[0].value);
    }
  }, [plansData]);

  return (
    <View>
      <Text style={propertyStyles.secondTitle}>Floor & Payment Plans</Text>
      <View style={styles.selectContainer}>
        <Text style={styles.chooseRoomText}>
          Choose room count to view floor and payment options
        </Text>
        <Dropdown
          style={styles.dropdown}
          selectedTextStyle={styles.placeholderStyle}
          renderRightIcon={() => <ArrowDownSvg />}
          activeColor="#fff"
          data={options}
          visibleSelectedItem={false}
          labelField="label"
          valueField="value"
          placeholder={selectedRooms}
          value={selectedRooms}
          closeModalWhenSelectedItem={true}
          renderItem={(item) => (
            <TouchableOpacity
              onPress={() => setSelectedRooms(item.value)}
              style={styles.itemContainer}>
              <Text style={styles.text}>{item.label}</Text>
              <View
                style={[
                  styles.checkBox,
                  selectedRooms === item.value && styles.checkedBox,
                ]}>
                <CheckedIconSvg />
              </View>
            </TouchableOpacity>
          )}
          onChange={(item) => {
            setSelectedRooms(item.value);
          }}
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingVertical: 12 }}
      >
        <View style={styles.sliderContainer}>
          {plansData && Object.keys(plansData).length
            ? plansData[selectedRooms]?.map((plan, idx) => (
            <View key={idx} style={styles.slideItem}>
              <Image source={infoIcon} style={styles.infoIcon} />
              <TouchableOpacity
                onPress={() => handleSelectPlan({...plan, rooms: selectedRooms})}
              >
                <Plan planData={plan} rooms={selectedRooms} />
              </TouchableOpacity>
            </View>
          )) : (
            <Text>No plans found</Text>
          )}
        </View>
      </ScrollView>
    </View>
  )
}

export default FloorPlans
