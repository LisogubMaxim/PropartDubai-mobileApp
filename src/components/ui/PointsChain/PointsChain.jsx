import { Text, View } from "react-native";
import styles from "./pointsChainStyles";
import { useState } from "react";

const PointsChain = ({ data }) => {
    return (
        <View>
            {data.map((item, index) => (
                <View style={styles.step} key={index}>
                    <View style={styles.num}>
                        <Text style={styles.textNum}>{index + 1}</Text>
                    </View>
                    <Text style={styles.textOfStep}>{item}</Text>
                    {index !== data.length - 1 && <View style={styles.line}></View>}
                </View>
            ))}
        </View>
    );
};

export default PointsChain;
