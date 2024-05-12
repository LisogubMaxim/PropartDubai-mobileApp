import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

import ChekSvg from "../../../../../assets/svg/ChekSvg";

import styles from "./selectionButtonWithCheckStyles";

const SelectionButtonWithCheck = ({ text, setTypeOfHousing, marginBottom }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected);
        setTypeOfHousing(text, !isSelected);
    };

    const buttonStyle = {
        backgroundColor: isSelected ? "#333863" : null,
        borderWidth: isSelected ? 0 : 1,
        marginBottom: marginBottom,
    };

    return (
        <TouchableOpacity style={[styles.buttonStyle, buttonStyle]} onPress={handleClick}>
            <Text style={[styles.text, { color: isSelected ? "#ffffff" : "#6F707A" }]}>{text}</Text>
            <ChekSvg />
        </TouchableOpacity>
    );
};

export default SelectionButtonWithCheck;
