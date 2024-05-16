import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import AccordionMenu from './AccordionMenu';
import GetConsultation from '../ui/GetConsultation/GetConsultation';

import styles from './accordionStyles';

import {
  title,
  subtitle,
  freezoneAccordionData,
} from '../../data/accordionData/freezone/freezoneData';

const Accordion = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <AccordionMenu data={freezoneAccordionData} />
        <Text style={styles.text}>
          Choosing between a Freezone and Mainland depends on various factors.
          We can advice you the best variant.
        </Text>
        <GetConsultation />
      </View>
    </ScrollView>
  );
};

export default Accordion;
