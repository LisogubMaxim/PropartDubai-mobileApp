import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    block: {
        height: 320,
        width: "100%",
        flexDirection: "row",
        gap: 12,
    },

    vertical: {
        height: 320,
        flex: 1,
        gap: 12,
    },

    image: {
        flex: 1,
    },

    horizontal: {
        width: "100%",
        height: 154,
    },

    text: {
        position: "absolute",
        bottom: 10,
        left: 12,
    },

    title: {
        fontFamily: "OpenSans_600SemiBold",
        fontSize: 18,
        color: "#ffffff",
    },

    price: {
        fontFamily: "Nunito_400Regular",
        fontSize: 14,
        color: "#B7B8BC",
    },
});

export default styles;
