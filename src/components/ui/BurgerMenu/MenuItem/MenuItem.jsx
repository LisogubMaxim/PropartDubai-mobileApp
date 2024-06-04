import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

import ArrowDownSvg from "../../../../../assets/svg/ArrowDownSvg";

import styles from "./menuItemStyles";

const MenuItem = ({ title, list = null, isBorder = false, onPress }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenList = () => {
        setIsOpen(!isOpen);
    };

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={list ? handleOpenList : onPress}>
                <Text style={styles.title}>{title}</Text>
                {list && (
                    <View style={{ transform: isOpen ? "rotate(180deg)" : "" }}>
                        <ArrowDownSvg />
                    </View>
                )}
            </TouchableOpacity>
            {list && isOpen && (
                <View style={isBorder && styles.border}>
                    {list.map((item, index) => (
                        <TouchableOpacity key={index} style={styles.listItem} onPress={() => onPress(item)}>
                            <Text style={styles.textItem}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

export default MenuItem;
