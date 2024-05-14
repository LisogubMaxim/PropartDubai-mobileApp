import { Text, View } from "react-native";

import styles from "./informationPanelStyles";

const InformationPanel = ({
    title,
    titleColor,
    text,
    topText,
    topTextSize,
    bottomText,
    bottomTextSize,
    backgroundColor = "#ffffff",
}) => {
    const textStyle = {
        color: backgroundColor === "#333863" ? "#ffffff" : "#333863",
    };

    return (
        <View style={[styles.informationPanel, { backgroundColor: backgroundColor, borderColor: backgroundColor }]}>
            <View style={styles.top}>
                <View style={styles.titleContainer}>
                    <Text style={[styles.title, { color: titleColor ? titleColor : "#6F707A" }]}>{title}</Text>
                </View>
                {text && <Text style={styles.text}>{text}</Text>}
            </View>
            <View style={styles.bottom}>
                <Text style={[styles.bottomText, textStyle, { fontSize: topTextSize }]}>{topText}</Text>
                <Text style={[styles.bottomText, textStyle, { fontSize: bottomTextSize }]}>{bottomText}</Text>
            </View>
        </View>
    );
};

export default InformationPanel;
