import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    // },

    menuBar: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        alignItems: "center",
    },

    search: {
        height: 72,
        width: 72,
        backgroundColor: "rgba(51, 56, 99, 0.4)",
        borderRadius: 100,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
    },

    circle: {
        height: 56,
        width: 56,
        backgroundColor: "#333863",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    },

    navigate: {
        position: "absolute",
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 28,
        justifyContent: "space-between",
        top: 46,
    },

    halfNav: {
        flexDirection: "row",
        gap: 16,
    },
});

export default styles;
