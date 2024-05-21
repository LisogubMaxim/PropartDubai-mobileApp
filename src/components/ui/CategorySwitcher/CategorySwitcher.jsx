import { Text, TouchableWithoutFeedback, View } from "react-native";
import { useState } from "react";

import styles from "./categorySwitcherStyles";

const CategorySwitcher = ({ data }) => {
    const [activeCategory, setActiveCategory] = useState(data[0].category);
    const [showFullText, setShowFullText] = useState(false);

    const handleClickCategory = (category) => {
        setActiveCategory(category);
        setShowFullText(false);
    };

    return (
        <View style={styles.categorySwitcher}>
            <View style={styles.category}>
                {data.map((value, index) => (
                    <TouchableWithoutFeedback key={index} onPress={() => handleClickCategory(value.category)}>
                        <Text style={activeCategory === value.category ? styles.active : styles.notActive}>{value.category}</Text>
                    </TouchableWithoutFeedback>
                ))}
            </View>
            <View style={showFullText ? "" : styles.hide}>
                {data.map((value, index) => (
                    <Text key={index} style={[styles.text, { display: activeCategory === value.category ? "block" : "none" }]}>
                        {showFullText ? `${value.text}  ` : `${value.text.substring(0, 145)}  `}
                        {value.text.length > 145 && (
                            <TouchableWithoutFeedback onPress={() => setShowFullText(!showFullText)}>
                                <Text style={styles.show}>{showFullText ? "Hide" : "Show…"}</Text>
                            </TouchableWithoutFeedback>
                        )}
                    </Text>
                ))}
            </View>
        </View>
    );
};

export default CategorySwitcher;
