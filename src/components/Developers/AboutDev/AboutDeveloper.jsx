import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import PropertyCard from '../../ui/PropertyCard/PropertyCard';
import GetConsultation from '../../ui/GetConsultation/GetConsultation';
import MenuBar from '../../ui/MenuBar/MenuBar';
import BurgerMenu from '../../ui/BurgerMenu/BurgerMenu';

import emaarBanner from '../../../../assets/images/developers/emaarBanner.png';

import { propertiesData } from '../../../data/developers/developersData';

import styles from './aboutDevStyles';
import CircleButton from '../../ui/CircleButton/CircleButton';

const Main = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <ScrollView>
        <View style={{ marginBottom: 20 }}>
          <Image source={emaarBanner} style={styles.banner} />
          <CircleButton position={{ top: 60, left: 20 }} type="goBack" />
          <View style={styles.bannerDescr}>
            <Text style={styles.mainTitle}>Emaar</Text>
            <Text style={styles.subtitle}>Developments: 241</Text>
            <Text style={styles.subtitle}>Price from AED 750 888</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Description</Text>
          <Text style={styles.text}>
            Established in 1997, Emaar has become synonymous with iconic
            architectural landmarks and master-planned communities that redefine
            urban living standards.
          </Text>
          <View style={styles.block}>
            <Text style={styles.title}>Property by Emaar</Text>
            <TouchableOpacity>
              <Text style={styles.more}>More</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollIndicatorInsets={{ right: 100 }}>
            <View style={styles.sliderContainer}>
              {propertiesData.map((property, idx) => (
                <View key={idx}>
                  <PropertyCard
                    key={idx}
                    width={320}
                    height={228}
                    image={property.image}
                    title={property.title}
                    amount={property.amount}
                  />
                </View>
              ))}
            </View>
          </ScrollView>
          <Text style={styles.getHelp}>Get help from our expert</Text>
          <GetConsultation text="Our specialist will help you with any question you may have - we are here to help you!" />
          <View style={{ height: 150 }} />
        </View>
      </ScrollView>
      <MenuBar />
    </>
  );
};

export default Main;
