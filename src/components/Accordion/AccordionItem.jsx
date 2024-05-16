import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';

import PlusSvg from '../../../assets/svg/PlusSvg.js';
import ExitSvg from '../../../assets/svg/ExitSvg.js';

import styles from './accordionStyles';

const AccordionItem = ({ title, subtitle, img, onPress, isOpen }) => {
  return (
    <View style={[styles.accordion, isOpen && styles.active]}>
      <TouchableOpacity onPress={onPress} style={styles.accordionHeader}>
        <View style={styles.headerBlock}>
          <Image source={img} style={styles.headerIcon} />
          <Text style={[styles.headerTitle, isOpen && { color: '#fff' }]}>
            {title}
          </Text>
        </View>
        {isOpen ? <ExitSvg /> : <PlusSvg />}
      </TouchableOpacity>
      <Collapsible collapsed={!isOpen}>
        <View style={styles.accordionCollapse}>
          <Text style={styles.bodyTitle}>{subtitle}</Text>
        </View>
      </Collapsible>
    </View>
  );
};

export default AccordionItem;
