import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 99,
    },

    menu: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        width: "70%",
        backgroundColor: "#fff",
        padding: 20,
        elevation: 4,
        zIndex: 100,
    },

    header: {
        marginTop: 60,
        marginBottom: 16,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    title: {
        fontFamily: "OpenSans_600SemiBold",
        fontSize: 24,
        color: "#333863",
    },

    close: {
        width: 44,
        height: 44,
        borderRadius: 100,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        ...Platform.select({
            ios: {
                shadowColor: "#0F1121",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.06,
                shadowRadius: 30,
            },
            android: {
                elevation: 3,
                shadowColor: "#0F1121",
            },
        }),
    },
});

export default styles;
