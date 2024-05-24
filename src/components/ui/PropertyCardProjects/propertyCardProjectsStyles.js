import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    imageContent: {
        position: "relative",
    },
    imageInfo: {
        position: "absolute",
        width: "100%",
        bottom: 14,
        paddingHorizontal: 11,
    },
    title: {
        fontFamily: "OpenSans_600SemiBold",
        fontSize: 18,
        color: "#fff",
    },
    subtitle: {
        fontSize: 14,
        color: "#B7B8BC",
    },
    container: {
        backgroundColor: "#ffffff",
        position: "absolute",
        top: 64,
        right: 12,
        borderRadius: 10,
    },
    point: {
        height: 42,
        width: 148,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#F1F1F1",
    },
    text: {
        fontFamily: "Nunito_400Regular",
        fontSize: 16,
    },
});

export default styles;
