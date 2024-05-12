import { Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useEffect, useRef, useState } from "react";

import ArrowDownSvg from "../../../../../assets/svg/ArrowDownSvg";

import styles from "./rangeStyles";

export const Range = ({ onChangeValue, values, minValue = "0" }) => {
    const [isActive, setIsActive] = useState(false);
    const [selectedValue, setSelectedValue] = useState(minValue);

    const moreThanMinimum = minValue && minValue !== "0" ? values.slice(values.indexOf(minValue) + 1) : values;

    const handleOpenContainer = () => {
        setIsActive(!isActive);
    };

    const handleChangeValue = (item) => {
        onChangeValue(item);
        setSelectedValue(item);
        setIsActive(!isActive);
    };

    useEffect(() => {
        if (minValue === "Unlimited") {
            setSelectedValue("Unlimited");
            onChangeValue("Unlimited");
        } else if (minValue !== "0" && values.indexOf(minValue) >= values.indexOf(selectedValue))
            setSelectedValue(values[values.indexOf(minValue) + 1]);
    }, [selectedValue, minValue]);

    return (
        <View style={[styles.rangeContainer, isActive ? styles.rangeActive : ""]}>
            <TouchableOpacity style={styles.range} onPress={handleOpenContainer}>
                <Text style={[styles.text, selectedValue !== "0" && { color: "#0F1121" }]}>{selectedValue}</Text>
                <View style={{ transform: isActive ? "rotate(180deg)" : "" }}>
                    <ArrowDownSvg />
                </View>
            </TouchableOpacity>
            {isActive && (
                <View style={styles.container}>
                    {moreThanMinimum.map((item, index) => (
                        <View key={index} style={styles.value}>
                            <TouchableOpacity style={styles.buttonValue} onPress={() => handleChangeValue(item)}>
                                <Text style={styles.textValue}>{item}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
};
