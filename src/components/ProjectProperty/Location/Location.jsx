import { StyleSheet, Text, View } from 'react-native'
import MapView, { Polygon } from 'react-native-maps';

import propertyStyles from '../propertyStyles'
import styles from './locationStyles'

const Location = ({ polygon }) => {
  const polygonCoords = polygon?.map(point => ({
    latitude: parseFloat(point.lat),
    longitude: parseFloat(point.lng)
  }));

  const getCenterCoordinate = (coords) => {
    const numCoords = coords.length;
    const sumCoords = coords.reduce(
      (acc, coord) => {
        return {
          latitude: acc.latitude + parseFloat(coord.latitude),
          longitude: acc.longitude + parseFloat(coord.longitude)
        };
      },
      { latitude: 0, longitude: 0 }
    );
    return {
      latitude: sumCoords.latitude / numCoords,
      longitude: sumCoords.longitude / numCoords
    };
  };

  const centerCoordinate = getCenterCoordinate(polygonCoords);

  return (
    <View style={styles.location}>
      <Text style={[propertyStyles.secondTitle, { paddingHorizontal: 20 }]}>
        Location
      </Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: centerCoordinate.latitude,
          longitude: centerCoordinate.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polygon
          coordinates={polygonCoords}
          strokeColor="#4e6aff"
          fillColor="#d6dcfc"
          strokeWidth={2}
        />
      </MapView>
    </View>
  )
}

export default Location
