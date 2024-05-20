import React from 'react';
import { Image, Text, View, ScrollView } from 'react-native';

import balance from '../../../../assets/images/balance.png';
import profit from '../../../../assets/images/profit.png';
import ellipse from '../../../../assets/images/ellipse.png';

import styles from './sliderStyles';

const data = [
  { img: balance, text: 'Currency stability' },
  { img: profit, text: 'Profitable real estate' },
  { img: ellipse, text: 'Low acquisition cost' },
  { img: ellipse, text: 'Zero income of property taxes' },
  { img: ellipse, text: 'Obtaining a resident visa' },
];

const WhyChooseDubaiSlider = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollIndicatorInsets={{ right: 100 }}>
      <View style={styles.sliderContainer}>
        {data.map((item, idx) => (
          <View style={styles.card} key={idx}>
            <Image source={item.img} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default WhyChooseDubaiSlider;
