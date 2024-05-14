import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    points: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
    },

    point: {
        paddingLeft: 16,
        paddingRight: 16,
        borderWidth: 1,
        borderColor: "#D6D7E0",
        borderRadius: 40,
        height: 40,
        justifyContent: "center",
    },

    text: {
        color: "#333863",
        fontFamily: "Nunito_400Regular",
        fontSize: 14,
    },
});

export default styles;
