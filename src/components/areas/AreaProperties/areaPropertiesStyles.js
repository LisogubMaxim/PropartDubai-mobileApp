import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        marginHorizontal: 20,
        paddingBottom: 8,
    },

    search: {
        flexDirection: "row",
        gap: 8,
        marginBottom: 8,
    },

    body: {
        paddingHorizontal: 20,
        // marginBottom: 150,
    },

    property: {
        gap: 12,
        marginBottom: 46,
    },

    titleBody: {
        color: "#0F1121",
        fontFamily: "OpenSans_600SemiBold",
        fontSize: 16,
        marginBottom: 16,
    },
});

export default styles;
