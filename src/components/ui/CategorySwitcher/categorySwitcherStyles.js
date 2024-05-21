import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    category: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
    },

    active: {
        fontFamily: "OpenSans_600SemiBold",
        fontSize: 16,
        color: "#333863",
        textDecorationLine: "underline",
    },

    notActive: {
        fontFamily: "OpenSans_600SemiBold",
        fontSize: 16,
        color: "#B7B8BC",
    },

    text: {
        fontFamily: "Nunito_400Regular",
        fontSize: 14,
        color: "#0F1121",
    },

    show: {
        color: "#333863",
        textDecorationLine: "underline",
    },

    hide: {
        overflow: "hidden",
        height: 60,
    },
});

export default styles;
