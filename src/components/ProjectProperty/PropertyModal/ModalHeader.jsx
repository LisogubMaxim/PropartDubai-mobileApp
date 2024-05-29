import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import CloseCrossSvg from '../../../../assets/svg/CloseCrossSvg'

const ModalHeader = ({ title, handleClose }) => {
  const statusBarHeight = getStatusBarHeight();

  return (
    <View style={[styles.header, { paddingTop: statusBarHeight + 10 }]}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={handleClose}>
        <CloseCrossSvg />
      </TouchableOpacity>
    </View>
  )
}

export default ModalHeader

const styles = StyleSheet.create({
  header: {
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontFamily: 'OpenSans_600SemiBold',
    fontSize: 18,
  },
})