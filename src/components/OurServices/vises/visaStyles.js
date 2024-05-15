import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    visa: {},

    header: {
        paddingTop: 26,
        paddingLeft: 16,
        paddingRight: 16,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 34,
    },

    title: {
        fontFamily: "OpenSans_600SemiBold",
        fontSize: 20,
        color: "#333863",
    },

    body: {
        marginLeft: 20,
        marginRight: 20,
    },

    text: {
        fontFamily: "Nunito_400Regular",
        fontSize: 14,
        color: "#6F707A",
        marginBottom: 24,
    },

    informationPanel: {
        gap: 8,
        marginBottom: 32,
    },

    row: {
        gap: 8,
        flexDirection: "row",
    },

    bodyTitle: {
        color: "#000000",
        fontFamily: "Nunito_400Regular",
        fontSize: 16,
        marginBottom: 16,
    },
});

export default styles;
