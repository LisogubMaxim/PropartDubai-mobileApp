import { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import styles from './interiorExteriorStyles'

const InteriorExterior = ({ interiorImages, exteriorImages }) => {
  const [selectedImages, setSelectedImages] = useState("exterior");

  return (
    <View>
      <View style={styles.toggleButtons}>
        <TouchableOpacity
          onPress={() => setSelectedImages("exterior")}
        >
          <Text
            style={[styles.btn, selectedImages === 'exterior' && styles.btnActive]}
          >Exterior</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedImages("interior")}
        >
          <Text
            style={[styles.btn, selectedImages === 'interior' && styles.btnActive]}
          >Interior</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.sliderContainer}>
          {selectedImages === 'exterior' && exteriorImages.map((img, idx) => (
            <View style={styles.slideItem} key={idx}>
              <Image source={{ uri: img }} style={styles.img} />
            </View>
          ))}
          {selectedImages === 'interior' && interiorImages.map((img, idx) => (
            <View style={styles.slideItem} key={idx}>
              <Image source={{ uri: img }} style={styles.img} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default InteriorExterior