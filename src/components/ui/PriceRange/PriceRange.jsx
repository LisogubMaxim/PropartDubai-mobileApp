import { Text, View } from "react-native";
import { useState } from "react";

import { Range } from "./Range/Range";

import styles from "./priceRangeStyles";

export const PriceRange = ({ onChange }) => {
    const values = ["150K", "250K", "500K", "1M", "5M", "Unlimited"];

    const [minValue, setMinValue] = useState("0");
    const [maxValue, setMaxValue] = useState("0");

    const handleMinChange = (value) => {
        setMinValue(value);
        // onChange(value, maxValue);
    };

    const handleMaxChange = (value) => {
        setMaxValue(value);
        // onChange(minValue, value);
    };

    return (
        <View style={styles.priceRange}>
            <Range onChangeValue={handleMinChange} values={values} />
            <Text style={styles.text}>to</Text>
            <Range onChangeValue={handleMaxChange} values={values} minValue={minValue} />
        </View>
    );
};

export default PriceRange;
