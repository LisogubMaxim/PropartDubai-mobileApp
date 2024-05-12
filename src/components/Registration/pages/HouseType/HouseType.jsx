import { Text, View } from "react-native";
import { useState } from "react";

import SelectionButtonWithCheck from "../../../ui/customSelectionButton/SelectionButtonWithCheck/SelectionButtonWithCheck";

import styles from "./houseTypeStyles";

const HouseType = () => {
    const [typeOfHousing, setTypeOfHousing] = useState([]);

    const handleTypeOfHousingSelection = (housingType, isSelected) => {
        if (isSelected) {
            setTypeOfHousing([...typeOfHousing, housingType]);
        } else {
            setTypeOfHousing(typeOfHousing.filter((type) => type !== housingType));
        }
    };

    return (
        <View>
            <Text style={styles.title}>What are you searching?</Text>
            <View style={styles.body}>
                <View style={styles.button}>
                    <SelectionButtonWithCheck text="Plots" setTypeOfHousing={handleTypeOfHousingSelection} />
                </View>
                <View style={styles.button}>
                    <SelectionButtonWithCheck text="Townhouses" setTypeOfHousing={handleTypeOfHousingSelection} />
                </View>
                <View style={styles.button}>
                    <SelectionButtonWithCheck text="Apartments" setTypeOfHousing={handleTypeOfHousingSelection} />
                </View>
                <View style={styles.button}>
                    <SelectionButtonWithCheck text="Villa" setTypeOfHousing={handleTypeOfHousingSelection} />
                </View>
            </View>
        </View>
    );
};

export default HouseType;
