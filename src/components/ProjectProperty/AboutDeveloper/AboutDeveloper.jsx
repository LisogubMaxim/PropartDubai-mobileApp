import { Image, Text, View } from 'react-native'
import qrCodeImg from '../../../../assets/images/qr-code.png'
import DownloadSvg from '../../../../assets/svg/DownloadSvg'
import PhoneSvg from '../../../../assets/svg/PhoneSvg'

import propertyStyles from '../propertyStyles'
import styles from './aboutDeveloperStyles'

const AboutDeveloper = () => {
  return (
    <View style={propertyStyles.section}>
      <Text style={propertyStyles.secondTitle}>About developer</Text>
      <View style={styles.aboutContainer}>
        <View style={styles.qrCode}>
          <Image source={qrCodeImg} style={styles.qrImg} />
        </View>
        <View style={styles.developerInfo}>
          <View style={styles.infoItem}>
            <Text style={styles.infoText}>#123245324324314</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoText}>23/04/2025</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoText}>Download PDF</Text>
            <DownloadSvg />
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoText}>Get info</Text>
            <PhoneSvg />
          </View>
        </View>
      </View>
      <Text style={styles.text}>
        Data regarding property inventory, pricing, and other details were sourced from public platforms including Property Finder, Bayut, Reelly, Alnair, etc. PRO PART REAL ESTATE L.L.C is not affiliated with these sources and assumes no liability for the accuracy of information or images presented on the website.
      </Text>
    </View>
  )
}

export default AboutDeveloper
