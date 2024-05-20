import { Text, TouchableOpacity, View } from "react-native";

import CloseCrossSvg from "../../../../../assets/svg/CloseCrossSvg";

import styles from "./pointStyles";

const FilterPoints = ({ text, onPressDelete }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <TouchableOpacity onPress={() => onPressDelete(text)}>
                <CloseCrossSvg />
            </TouchableOpacity>
        </View>
    );
};

export default FilterPoints;
