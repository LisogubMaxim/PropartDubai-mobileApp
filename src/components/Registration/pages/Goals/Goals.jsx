import React from "react";
import { Text, View } from "react-native";

import Button from "../../../ui/Button/Button";

import styles from "./goalsStyles";

const Goals = ({ onPress }) => {
    return (
        <View>
            <Text style={styles.title}>What goals do you pursue using our app?</Text>
            <Text style={styles.text}>I`d like to...</Text>
            <View style={styles.button}>
                <Button
                    text={
                        <Text style={{ color: "#0F1121", fontFamily: "Nunito_400Regular" }}>
                            <Text style={{ color: "#333863", fontFamily: "Nunito_700Bold" }}>Buy </Text>
                            real estate
                        </Text>
                    }
                    borderColor="#B7B8BC"
                    onPress={onPress}
                />
            </View>
            <Button
                text={
                    <Text style={{ color: "#0F1121", fontFamily: "Nunito_400Regular" }}>
                        <Text style={{ color: "#333863", fontFamily: "Nunito_700Bold" }}>Sell </Text>
                        real estate
                    </Text>
                }
                borderColor="#B7B8BC"
                onPress={onPress}
            />
        </View>
    );
};

export default Goals;
