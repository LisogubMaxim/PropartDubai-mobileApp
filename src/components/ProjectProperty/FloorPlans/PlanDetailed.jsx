import { StyleSheet, View } from 'react-native'
import Plan from './Plan'
import InformationPanel from '../../ui/InformationPanel/InformationPanel'

const POINTS = [
  { title: 'Booking', value: '40%', price: 550500 },
  { title: 'Construction', value: '40%', price: 550500 },
  { title: 'Upon handover', value: '20%', price: 550500 },
  { title: 'After handover', value: '30%', price: 550500 },
]

const PlanDetailed = ({ planData }) => {
  return (
    <View>
      <Plan planData={planData} rooms={planData.rooms} imgHeight={284} />

      <View style={styles.points}>
        {POINTS.map((point, idx) => (
          <View style={styles.point} key={idx}>
            <InformationPanel
              title={point.title}
              topText={point.value}
              topTextSize={24}
              bottomText={`AED ${point.price.toLocaleString()}`}
              bottomTextSize={14}
            />
          </View>
        ))}
      </View>
    </View>
  )
}

export default PlanDetailed

const styles = StyleSheet.create({
  points: {
    marginTop: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  point: {
    width: 171,
  }
})