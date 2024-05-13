import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

import ArrowDownSvg from "../../../../assets/svg/ArrowDownSvg";

import styles from "./dropDownListStyles";

const DropDownList = ({ text, list }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenList = () => {
        setIsOpen(!isOpen);
    };

    return (
        <View>
            <TouchableOpacity
                style={[styles.dropDown, { backgroundColor: isOpen ? "#333863" : "transparent" }]}
                onPress={handleOpenList}
            >
                <Text style={[styles.text, { color: isOpen ? "#FFFFFF" : "#0F1121" }]}>{text}</Text>
                <View style={{ transform: isOpen ? "rotate(180deg)" : "" }}>
                    <ArrowDownSvg color={isOpen ? "#D6D7E0" : "#6F707A"} />
                </View>
            </TouchableOpacity>

            {isOpen && (
                <View style={styles.container}>
                    {list.map((item, index) => (
                        <TouchableOpacity key={index} style={styles.button}>
                            <Text style={styles.text}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

export default DropDownList;
