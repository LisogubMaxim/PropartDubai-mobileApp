import { Image, Text, View } from 'react-native'
import PriceSvg from '../../../../assets/svg/PriceSvg'
import SizeSvg from '../../../../assets/svg/SizeSvg'
import BedroomSvg from '../../../../assets/svg/BedroomSvg'

import styles from './floorPlansStyles'

const Plan = ({ planData, rooms, imgHeight = 220 }) => {
  return (
    <View>
      <Image
        source={{ uri: planData.image }}
        style={{ height: imgHeight, marginBottom: 16 }}
      />
      <View style={styles.planInfo}>
        <View style={styles.planInfoItem}>
          <PriceSvg />
          <Text style={styles.planInfoText}>AED {planData.price.toLocaleString()}</Text>
        </View>
        <View style={styles.planInfoItem}>
          <SizeSvg />
          <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
            <Text style={[styles.planInfoText, { fontSize: 14 }]}>{planData.size.toFixed(2)} ft</Text>
            <Text style={[styles.planInfoText, { fontSize: 9, lineHeight: 10 }]}>2</Text>
          </View>
        </View>
        <View style={styles.planInfoItem}>
          <BedroomSvg />
          <Text style={styles.planInfoText}>{rooms}</Text>
        </View>
      </View>
    </View>
  )
}

export default Plan
