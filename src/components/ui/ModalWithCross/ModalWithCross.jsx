import { Modal, View } from "react-native";
import styles from "./modalWithCrossStyles";

const ModalWithCross = ({ visible, children }) => {
    return (
        <Modal animationType="slide" transparent={true} visible={visible}>
            <View style={{ flex: 1 }}></View>
            <View style={styles.modalView}>{children}</View>
        </Modal>
    );
};

export default ModalWithCross;
