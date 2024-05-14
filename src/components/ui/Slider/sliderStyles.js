import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    scroll: {
        paddingHorizontal: 20,
    },

    container: {
        flexDirection: "row",
        gap: 8,
        paddingTop: 1,
        marginBottom: 24,
    },

    slide: {
        padding: 16,
        backgroundColor: "#ffffff",
        borderRadius: 16,
        borderColor: "#F1F1F1",
        borderWidth: 1,
        gap: 16,
        // justifyContent: "space-between",
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

    title: {
        color: "#333863",
        fontFamily: "OpenSans_600SemiBold",
        fontSize: 16,
        lineHeight: 17,
    },

    text: {
        color: "#6F707A",
        fontFamily: "Nunito_400Regular",
        fontSize: 14,
        lineHeight: 18,
    },
});

export default styles;
