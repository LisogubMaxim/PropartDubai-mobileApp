import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import infoIcon from '../../../../assets/images/infoIcon.png';
import tax from '../../../../assets/images/accordion/tax.png';
import visa from '../../../../assets/images/accordion/visa.png';

import styles from './ourServicesSliderStyles';

services = [
  { img: tax, text: 'Company registration' },
  { img: visa, text: 'Visa processing' },
  { img: tax, text: 'Accounting support' },
  { img: visa, text: 'Employment' },
  { img: tax, text: 'Trademark registration' },
  { img: visa, text: 'Attorney powers' },
];

const OurServicesSlider = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={true}
      scrollIndicatorInsets={{ right: 100 }}>
      <View style={styles.sliderContainer}>
        {services.map((service, idx) => (
          <View style={styles.card} key={idx}>
            <Image source={infoIcon} style={styles.infoIcon} />
            <View style={styles.block}>
              <Image source={service.img} />
              <Text style={styles.text}>{service.text}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default OurServicesSlider;
