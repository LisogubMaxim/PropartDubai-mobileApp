import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    informationPanel: {
        borderRadius: 16,
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

    top: {
        width: "70%",
    },

    titleContainer: {
        borderWidth: 1,
        borderColor: "#F1F1F1",
        borderRadius: 100,
        alignSelf: "flex-start",
        height: 28,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 10,
        paddingRight: 10,
    },

    title: {
        fontFamily: "Nunito_400Regular",
        fontSize: 12,
    },

    text: {
        color: "#000000",
        fontFamily: "Nunito_400Regular",
        fontSize: 14,
        marginTop: 12,
    },

    bottom: {
        alignItems: "flex-end",
    },

    bottomText: {
        fontFamily: "OpenSans_600SemiBold",
    },
});

export default styles;
