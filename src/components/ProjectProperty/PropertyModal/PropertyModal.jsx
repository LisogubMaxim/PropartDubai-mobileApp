import { Modal, ScrollView } from 'react-native'

const PropertyModal = ({ visible, children }) => {
  return (
    <Modal
      animationType="slide"
      visible={visible}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </Modal>
  )
}

export default PropertyModal
