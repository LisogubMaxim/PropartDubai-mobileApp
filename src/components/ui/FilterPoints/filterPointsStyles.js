import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        gap: 8,
        flexDirection: "row",
    },

    point: {
        height: 40,
        paddingHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40,
        backgroundColor: "#333863",
    },

    text: {
        color: "#ffffff",
        fontFamily: "Nunito_400Regular",
        fontSize: 14,
    },
});

export default styles;
