import { Text, View } from "react-native";

import InformationCircleSvg from "../../../../assets/svg/InformationCircleSvg";

import styles from "./employmentOptionsStyles";

const EmploymentOptions = ({ text }) => {
    return (
        <View style={styles.employmentOptions}>
            <View style={styles.svg}>
                <InformationCircleSvg />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    );
};

export default EmploymentOptions;
