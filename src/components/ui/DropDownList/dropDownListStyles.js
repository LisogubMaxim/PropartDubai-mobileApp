import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    dropDown: {
        height: 72,
        borderWidth: 1,
        borderColor: "#CFCFD3",
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingLeft: 16,
        paddingRight: 16,
    },

    text: {
        fontFamily: "Nunito_400Regular",
        fontSize: 16,
        color: "#0F1121",
    },

    container: {
        marginLeft: 95,
        marginRight: 95,
    },

    button: {
        height: 56,
        paddingBottom: 12,
        paddingTop: 12,
    },
});

export default styles;
