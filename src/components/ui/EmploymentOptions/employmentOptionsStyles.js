import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    employmentOptions: {
        flex: 1,
        height: 90,
        borderWidth: 1,
        borderRadius: 16,
        borderColor: "#F1F1F1",
        paddingTop: 12,
        paddingBottom: 12,
        paddingRight: 16,
        paddingLeft: 16,
    },

    svg: {
        alignSelf: "flex-end",
    },

    textContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end",
    },

    text: {
        flex: 1,
        justifyContent: "flex-end",
        color: "#333863",
        fontFamily: "Nunito_400Regular",
        fontSize: 16,
    },
});

export default styles;
