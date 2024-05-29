import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
// import { useRoute, useNavigation } from '@react-navigation/native';
import Hero from './Hero/Hero';
import InteriorExterior from './InteriorExterior/InteriorExterior';
import FloorPlans from './FloorPlans/FloorPlans';
import Location from './Location/Location';

import {
  heroData,
  detailsData,
  amenitiesData,
  interiorImages,
  plansData,
  polygon
} from '../../data/propertyData';
import BedroomSvg from '../../../assets/svg/BedroomSvg';
import SizeSvg from '../../../assets/svg/SizeSvg';
import PriceSvg from '../../../assets/svg/PriceSvg';

import styles from './propertyStyles';
import AboutDeveloper from './AboutDeveloper/AboutDeveloper';
import PropertyCard from '../ui/PropertyCard/PropertyCard';
import { specialForYouData } from '../../data/mainScreenData/mainScreenData';
import GetConsultation from '../ui/GetConsultation/GetConsultation';
import Amenities from './Amenities/Amenities';
import PropertyModal from './PropertyModal/PropertyModal';
import ModalHeader from './PropertyModal/ModalHeader';
import PlanDetailed from './FloorPlans/PlanDetailed';

const ProjectProperty = () => {
  // const route = useRoute();
  // const navigation = useNavigation();
  // const { projectId } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalComponent, setModalComponent] = useState(null);

  const callModal = (component) => {
    setModalComponent(component);
    setModalVisible(true);
  };

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Hero handleGoBack={() => console.log("navigation.goBack()")} heroData={heroData} />
        <View style={styles.content}>
          <View style={styles.details}>
            <View style={styles.detail}>
              <BedroomSvg />
              <Text style={[styles.mainText, { fontSize: 16 }]}>{detailsData.bedrooms} bdrms</Text>
            </View>
            <View style={styles.detail}>
              <SizeSvg />
              <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                <Text style={[styles.mainText, { fontSize: 16 }]}>{detailsData.size} ft</Text>
                <Text style={[styles.mainText, { fontSize: 10, lineHeight: 12 }]}>2</Text>
              </View>
            </View>
            <View style={styles.detail}>
              <PriceSvg />
              <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                <Text style={[styles.mainText, { fontSize: 16 }]}>$ {detailsData.pricePerSquareMeter}/ft</Text>
                <Text style={[styles.mainText, { fontSize: 10, lineHeight: 12 }]}>2</Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.secondTitle}>Description</Text>
            <Text style={styles.mainText}>
              Located in Dubai's prestigious suburban area, it provides convenient access to business districts, nightlife, beaches, hospitals, and upscale shopping
              and dining venues. Just 15 minutes from Al Maktoum International Airport and 29 minutes from Dubai International Airport, it offers a stress-free living experience.
            </Text>
          </View>

          <View style={styles.section}>
            <View style={styles.titleWithMore}>
              <Text style={styles.secondTitle}>Amenities</Text>
              <TouchableOpacity
                onPress={() => {
                  callModal(<>
                    <ModalHeader title="Amenities" handleClose={() => setModalVisible(false)} />
                    <Amenities amenitiesData={[...amenitiesData, ...amenitiesData]} />
                  </>)
                }}
              >
                <Text style={styles.more}>More</Text>
              </TouchableOpacity>
            </View>
            <Amenities amenitiesData={amenitiesData} />
          </View>

          <View style={styles.section}>
            <InteriorExterior
              interiorImages={interiorImages}
              exteriorImages={heroData.images}
            />
          </View>

          <View style={styles.section}>
            <FloorPlans
              plansData={plansData}
              handleSelectPlan={(plan) => {
                callModal(<>
                  <ModalHeader title="Floor&Payments plans" handleClose={() => setModalVisible(false)} />
                  <PlanDetailed planData={plan} />
                </>)
              }}
            />
          </View>
        </View>

        {/* <Location polygon={polygon} /> */}

        <View style={styles.content}>
          <AboutDeveloper />

          <View style={styles.section}>
            <View style={styles.titleWithMore}>
              <Text style={styles.secondTitle}>Similar projects</Text>
              <TouchableOpacity
                onPress={() => callModal(<Text>TEST</Text>)}>
                <Text style={styles.more}>More</Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.sliderContainer}>
                {specialForYouData.map((property, idx) => (
                  <View key={idx}>
                    <PropertyCard
                      key={idx}
                      width={320}
                      height={228}
                      image={property.image}
                      title={property.title}
                      subtitle={property.subtitle}
                      amount={property.amount}
                    />
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>

          <View style={styles.section}>
            <Text style={styles.secondTitle}>Get help from our expert</Text>
            <GetConsultation
              text="Our specialist will help you with any question you may have - we are here to help you!"
            />
          </View>
        </View>
      </ScrollView>
      <PropertyModal visible={modalVisible}>
        <View style={styles.content}>
          {modalComponent}
        </View>
      </PropertyModal>
    </>
  )
}

export default ProjectProperty;
