import { View, Text } from "react-native";

import styles from "./informationPointsStyles";

const InformationPoints = ({ data }) => {
    return (
        <View style={styles.points}>
            {data.map((item, index) => (
                <View style={styles.point}>
                    <Text key={index} style={styles.text}>
                        {item}
                    </Text>
                </View>
            ))}
        </View>
    );
};

export default InformationPoints;
