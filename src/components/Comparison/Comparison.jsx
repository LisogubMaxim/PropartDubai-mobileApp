import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import GetConsultation from '../ui/GetConsultation/GetConsultation';

import { comparisonData } from '../../data/comparisonData';

import styles from './comparisonStyles';

const Comparison = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.mainTitle}>Comparison</Text>
        <View style={styles.items}>
          <View style={styles.block}>
            <Text style={styles.itemsTitle}>Freezone</Text>
            {comparisonData.map((item, idx) => (
              <React.Fragment key={idx}>
                <View style={styles.item}>
                  <Image source={item.img} style={styles.itemImg} />
                  <Text style={styles.itemText}>{item.freezone}</Text>
                </View>
              </React.Fragment>
            ))}
          </View>
          <View style={styles.block}>
            <Text style={styles.itemsTitle}>Mainland</Text>
            {comparisonData.map((item, idx) => (
              <React.Fragment key={idx}>
                <View style={styles.item}>
                  <Image source={item.img} style={styles.itemImg} />
                  <Text style={styles.itemText}>{item.mainland}</Text>
                </View>
              </React.Fragment>
            ))}
          </View>
        </View>
        <GetConsultation text="Choosing between a Freezone and Mainland depends on various factors. We can advise you the best variant." />
      </ScrollView>
    </View>
  );
};

export default Comparison;
