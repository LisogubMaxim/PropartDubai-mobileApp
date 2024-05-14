import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    step: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 32,
        marginLeft: 22,
    },

    num: {
        height: 50,
        width: 50,
        borderRadius: 100,
        borderColor: "#F1F1F1",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 16,
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

    textNum: {
        color: "#000000",
        fontFamily: "#Nunito_400Regular",
        fontSize: 16,
    },

    textOfStep: {
        color: "#0F1121",
        fontFamily: "#Nunito_400Regular",
        fontSize: 14,
        flex: 1,
    },

    line: {
        width: 1,
        height: 32,
        backgroundColor: "#f1f1f1",
        position: "absolute",
        top: "100%",
        left: 24.5,
        zIndex: -1,
    },
});

export default styles;
