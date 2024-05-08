import React from "react";
import { Text, View } from "react-native";

import Button from "../../../ui/Button/Button";

import styles from "./goalsStyles";

const Goals = ({ onPress }) => {
    return (
        <View>
            <Text style={styles.title}>What goals do you pursue using our app?</Text>
            <Text style={styles.text}>I`d like to...</Text>
            <Button
                text={
                    <Text>
                        <Text style={{ color: "#333863", fontFamily: "Nunito-Bold" }}>Buy </Text>
                        real estate
                    </Text>
                }
                color="#0F1121"
                borderColor="#B7B8BC"
                marginBottom={12}
                onPress={onPress}
            />
            <Button
                text={
                    <Text>
                        <Text style={{ color: "#333863", fontFamily: "Nunito-Bold" }}>Sell </Text>
                        real estate
                    </Text>
                }
                color="#0F1121"
                borderColor="#B7B8BC"
                onPress={onPress}
            />
        </View>
    );
};

export default Goals;
