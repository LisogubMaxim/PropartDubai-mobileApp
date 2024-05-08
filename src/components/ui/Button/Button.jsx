import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./buttonStyles";

const Button = ({ text, color, backgroundColor, borderColor, marginBottom, onPress }) => {
    const styleButton = {
        color: color,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        marginBottom: marginBottom,
    };

    return (
        <TouchableOpacity style={[styleButton, styles.button]} onPress={onPress}>
            <Text style={{ color: color }}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Button;
