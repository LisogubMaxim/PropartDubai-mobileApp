import { View, Text, ScrollView } from "react-native";

import styles from "./sliderStyles";

const Slider = ({ data, width, height }) => {
    const sliderStyle = {
        width: width,
        height: height,
    };

    return (
        <ScrollView
            horizontal
            contentContainerStyle={styles.scroll}
            showsHorizontalScrollIndicator={true}
            scrollIndicatorInsets={{ right: 100 }}
        >
            <View style={styles.container}>
                {data.map((item, index) => (
                    <View key={index} style={[styles.slide, sliderStyle]}>
                        <Text style={styles.title}>{item.title}</Text>
                        {item.text && <Text style={styles.text}>{item.text}</Text>}
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default Slider;
