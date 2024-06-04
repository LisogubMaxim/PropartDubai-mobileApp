import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
    },

    header: {
        paddingTop: 60,
    },

    title: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 16,
        paddingHorizontal: 20,
    },

    textTitle: {
        fontFamily: "OpenSans_600SemiBold",
        fontSize: 24,
        color: "#333863",
    },

    button: {
        width: 44,
        height: 44,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#F1F1F1",
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

    search: {
        flexDirection: "row",
        gap: 8,
        marginBottom: 8,
        paddingHorizontal: 20,
    },

    body: {
        marginHorizontal: 20,
    },

    propos: {
        marginBottom: 48,
        gap: 12,
    },

    text: {
        fontFamily: "OpenSans_600SemiBold",
        fontSize: 16,
        color: "#0F1121",
        marginBottom: 16,
    },

    help: {
        marginBottom: 150,
    },
});

export default styles;
