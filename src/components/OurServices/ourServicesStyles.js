import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    ourServices: {
        paddingTop: 68,
        marginLeft: 20,
        marginRight: 20,
        flex: 1,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 32,
    },

    title: {
        fontSize: 24,
        fontFamily: "OpenSans_600SemiBold",
        color: "#333863",
    },

    close: {
        width: 48,
        height: 48,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#F1F1F1",
        alignItems: "center",
        justifyContent: "center",
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

    menu: {
        gap: 12,
        marginBottom: 12,
    },

    button: {
        height: 72,
        borderWidth: 1,
        borderColor: "#CFCFD3",
        borderRadius: 6,
        justifyContent: "center",
        paddingLeft: 16,
        paddingRight: 16,
    },

    text: {
        fontFamily: "Nunito_400Regular",
        fontSize: 16,
        color: "#0F1121",
    },
});

export default styles;
