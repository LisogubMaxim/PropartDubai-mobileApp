import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        marginTop: 60,
        paddingHorizontal: 20,
    },

    title: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
    },

    textTitle: {
        fontFamily: "OpenSans_600SemiBold",
        fontSize: 24,
        color: "#333863",
    },

    change: {
        fontFamily: "OpenSans_400Regular",
        fontSize: 14,
        color: "#333863",
        textDecorationLine: "underline",
    },

    search: {
        alignItems: "center",
        flexDirection: "row",
        gap: 8,
        marginBottom: 8,
    },

    button: {
        width: 44,
        height: 44,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#F1F1F1",
        borderRadius: 100,
        backgroundColor: "#ffffff",
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

    body: {
        marginHorizontal: 20,
        gap: 12,
        marginBottom: 150,
    },
});

export default styles;
