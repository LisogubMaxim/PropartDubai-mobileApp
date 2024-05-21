import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        height: 400,
        width: "100%",
        marginBottom: 20,
    },

    back: {
        width: 44,
        height: 44,
        position: "absolute",
        top: 60,
        left: 20,
        backgroundColor: "rgba(15,17,33, 0.3)",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    },

    headerText: {
        position: "absolute",
        bottom: 20,
        left: 20,
    },

    title: {
        color: "#ffffff",
        fontFamily: "OpenSans_600SemiBold",
        fontSize: 24,
    },

    price: {
        color: "#B7B8BC",
        fontFamily: "Nunito_400Regular",
        fontSize: 16,
    },

    body: {
        marginHorizontal: 20,
    },

    description: {
        marginBottom: 40,
    },

    titleBody: {
        marginBottom: 16,
        color: "#0F1121",
        fontFamily: "OpenSans_600SemiBold",
        fontSize: 16,
    },

    text: {
        color: "#0F1121",
        fontFamily: "Nunito_400Regular",
        fontSize: 14,
    },

    top: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    more: {
        color: "#333863",
        fontFamily: "Nunito_400Regular",
        fontSize: 14,
        textDecorationLine: "underline",
    },

    slider: {
        flexDirection: "row",
        gap: 12,
    },
});

export default styles;
