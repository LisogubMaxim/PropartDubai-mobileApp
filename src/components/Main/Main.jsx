import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import MainHeader from '../ui/MainHeader/MainHeader';
import SearchInput from '../ui/SearchInput/SearchInput';
import FiltersBtn from '../ui/FiltersBtn/FiltersBtn';
import PropertyCard from '../ui/PropertyCard/PropertyCard';
import GetConsultation from '../ui/GetConsultation/GetConsultation';
import WhyChooseDubaiSlider from './whyChooseDubaiSlider/WhyChooseDubaiSlider';
import OurServicesSlider from './OurServicesSlider/OurServicesSlider';

import businessBay from '../../../assets/images/property/businessBay.jpg';

import {
  areasData,
  specialForYouData,
  developers,
} from '../../data/mainScreenData/mainScreenData';

import styles from './mainStyles';

const Main = () => {
  return (
    <View style={styles.container}>
      <MainHeader />
      <ScrollView>
        <View style={styles.block}>
          <SearchInput placeholder="Search property, area..." />
          <FiltersBtn />
        </View>
        <View style={styles.block}>
          <Text style={styles.title}>Special for you</Text>
          <TouchableOpacity>
            <Text style={styles.more}>More</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollIndicatorInsets={{ right: 100 }}>
          <View style={styles.sliderContainer}>
            {specialForYouData.map((property, idx) => (
              <View key={idx}>
                <PropertyCard
                  key={idx}
                  width={320}
                  height={368}
                  image={property.image}
                  title={property.title}
                  subtitle={property.subtitle}
                  amount={property.amount}
                />
              </View>
            ))}
          </View>
        </ScrollView>
        <Text style={styles.title}>Why choose Dubai</Text>
        <WhyChooseDubaiSlider />
        <View style={styles.block}>
          <Text style={styles.title}>Explore areas</Text>
          <TouchableOpacity>
            <Text style={styles.more}>More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.areasContainer}>
          <PropertyCard
            width={169}
            height={368}
            image={businessBay}
            title={'Business Bay'}
            amount={'977,355'}
            isButton={false}
          />
          <View style={{ gap: 12 }}>
            {areasData.map((property, idx) => (
              <PropertyCard
                width={169}
                height={178}
                key={idx}
                image={property.image}
                title={property.title}
                amount={property.amount}
                isButton={false}
              />
            ))}
          </View>
        </View>
        <View style={styles.block}>
          <Text style={styles.title}>Explore developers</Text>
          <TouchableOpacity>
            <Text style={styles.more}>More</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollIndicatorInsets={{ right: 100 }}>
          <View style={styles.sliderContainer}>
            {developers.map((dev, idx) => (
              <View key={idx}>
                <Image source={dev.logo} />
              </View>
            ))}
          </View>
        </ScrollView>
        <Text style={styles.title}>Our Services</Text>
        <OurServicesSlider />
        <Text style={styles.getHelp}>Get help from our expert</Text>
        <GetConsultation text="Our specialist will help you with any question you may have - we are here to help you!" />
      </ScrollView>
    </View>
  );
};

export default Main;
