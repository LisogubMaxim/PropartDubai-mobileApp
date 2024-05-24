import { ScrollView, Text, View } from 'react-native';
import { useState } from 'react';

import MainHeader from '../../ui/MainHeader/MainHeader';
import Point from '../../ui/FilterPoints/Point/Point';

import areaPropertiesData from '../../../data/area/areaPropertiesData';

import styles from './areaPropertiesStyles';
import SearchInput from '../../ui/SearchInput/SearchInput';
import FiltersBtn from '../../ui/FiltersBtn/FiltersBtn';
import GetConsultation from '../../ui/GetConsultation/GetConsultation';
import PropertyCard from '../../ui/PropertyCard/PropertyCard';
import MenuBar from '../../ui/MenuBar/MenuBar';
import BurgerMenu from '../../ui/BurgerMenu/BurgerMenu';
import ModalWithCross from '../../ui/ModalWithCross/ModalWithCross';
import Filters from '../../Filters/Filters';

const AreaProperties = () => {
  const [filterPoint, setFilterPoint] = useState(
    areaPropertiesData.filterPoint
  );
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClearPoint = () => {
    setFilterPoint(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <MainHeader onClick={toggleMenu} />
        <View style={styles.search}>
          <SearchInput placeholder="Search" />
          <FiltersBtn callModal={() => setFiltersVisible(true)} />
        </View>
        {filterPoint && (
          <Point text={filterPoint} onPressDelete={handleClearPoint} />
        )}
      </View>
      <ScrollView
        style={styles.body}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 16 }}>
        <View style={styles.property}>
          {areaPropertiesData.property.map((item, index) => (
            <View key={index}>
              <PropertyCard
                image={item.image}
                title={item.title}
                width={'100%'}
                height={284}
                amount={item.price}
                isButton={true}
              />
            </View>
          ))}
        </View>
        <View style={{ marginBottom: 150 }}>
          <Text style={styles.titleBody}>Get help from our expert</Text>
          <GetConsultation
            text={
              'Our specialist will help you with any question you may have - we are here to help you!'
            }
          />
        </View>
      </ScrollView>
      <MenuBar />
      <BurgerMenu
        isMenuOpen={isMenuOpen}
        closeMenu={() => setIsMenuOpen(false)}
      />
      {filtersVisible && <View style={styles.overlay}></View>}
      <ModalWithCross visible={filtersVisible}>
        <Filters onCloseModal={() => setFiltersVisible(false)} />
      </ModalWithCross>
    </View>
  );
};

export default AreaProperties;
