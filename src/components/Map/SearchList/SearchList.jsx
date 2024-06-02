import { useEffect, useRef, useState } from 'react';
import BurgerMenu from '../../ui/BurgerMenu/BurgerMenu';
import { Animated, ScrollView, Text, Dimensions, View } from 'react-native'
import MainHeader from '../../ui/MainHeader/MainHeader';
import SearchInput from '../../ui/SearchInput/SearchInput';
import FiltersBtn from '../../ui/FiltersBtn/FiltersBtn';
import ModalWithCross from '../../ui/ModalWithCross/ModalWithCross';
import Filters from '../../Filters/Filters';
import PropertyCard from '../../ui/PropertyCard/PropertyCard';
import specialData from '../../../data/specialData';

import styles from './searchListStyles'

const projectsData = specialData.propos;

const SearchList = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [filtersVisible, setFiltersVisible] = useState(false);
  
  const height = Dimensions.get('window').height;
  const position = useRef(new Animated.Value(height)).current

  useEffect(() => {
    Animated.timing(position, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [height])

  return (
    <>
      <Animated.ScrollView
        style={[styles.searchList, { transform: [{ translateY: position }] }]}
        showsVerticalScrollIndicator={false}
      >
        <MainHeader onClick={() => setOpenMenu((prev) => !prev)} />
        <View style={styles.inputBlock}>
          <SearchInput placeholder="Search property, area..." />
          <FiltersBtn callModal={() => setFiltersVisible(true)} />
        </View>
        <View style={styles.projects}>
          {projectsData?.slice(0, 8).map((project, idx) => (
            <View key={idx} style={styles.project}>
              <PropertyCard
                width='100%'
                height={284}
                image={project.img}
                title={project.title}
                subtitle={project.subtitle}
                amount={project.amount}
              />
            </View>
          ))}
        </View>
      </Animated.ScrollView>
      {/* <BurgerMenu isMenuOpen={openMenu} closeMenu={() => setOpenMenu(false)} /> */}
      {filtersVisible && <View style={styles.overlay}></View>}
      <ModalWithCross visible={filtersVisible}>
        <Filters onCloseModal={() => setFiltersVisible(false)} />
      </ModalWithCross>
    </>
  )
}

export default SearchList
