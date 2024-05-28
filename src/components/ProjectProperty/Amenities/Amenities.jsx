import { Text, View } from 'react-native'

import styles from './amenitiesStyles'

const Amenities = ({ amenitiesData }) => {
  return (
    <View style={styles.amenities}>
      {amenitiesData?.map((amenity, idx) => (
        <View key={idx} style={styles.amenity}>
          {amenity.img}
          <Text style={styles.amenityText}>{amenity.name}</Text>
        </View>
      ))}
    </View>
  )
}

export default Amenities
