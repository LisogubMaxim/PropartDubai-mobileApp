import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    employment: {
        paddingTop: 24,
        marginBottom: 21,
    },

    header: {
        alignItems: "center",
        marginBottom: 28,
    },

    headerTitle: {
        fontFamily: "OpenSans_600SemiBold",
        fontSize: 20,
        color: "#333863",
    },

    text: {
        marginLeft: 20,
        marginRight: 20,
        color: "#6F707A",
        fontFamily: "Nunito_400Regular",
        fontSize: 14,
        marginBottom: 16,
    },

    sliderTitle: {
        marginLeft: 20,
        marginRight: 20,
        color: "#000000",
        fontFamily: "Nunito_400Regular",
        fontSize: 16,
        marginBottom: 15,
    },

    slider: {
        marginBottom: 40,
    },

    body: {
        marginLeft: 20,
        marginRight: 20,
    },

    employmentOptions: {
        marginBottom: 40,
        flexDirection: "row",
        gap: 8,
    },

    title: {
        color: "#000000",
        fontFamily: "Nunito_400Regular",
        fontSize: 16,
        marginBottom: 16,
    },

    overlay: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
});

export default styles;
