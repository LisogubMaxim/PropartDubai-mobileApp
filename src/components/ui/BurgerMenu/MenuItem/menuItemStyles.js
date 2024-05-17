import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#F1F1F1",
        height: 56,
    },

    title: {
        fontFamily: "OpenSans_600SemiBold",
        fontSize: 16,
        color: "#0F1121",
    },

    listItem: {
        marginLeft: 45,
        height: 56,
        justifyContent: "center",
    },

    textItem: {
        fontFamily: "Nunito_400Regular",
        fontSize: 16,
        color: "#0F1121",
    },

    border: {
        borderBottomWidth: 1,
        borderColor: "#F1F1F1",
    },
});

export default styles;
