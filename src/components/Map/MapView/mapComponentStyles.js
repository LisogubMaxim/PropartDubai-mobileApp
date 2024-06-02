import { Dimensions, StyleSheet } from "react-native";
import { Marker } from "react-native-maps";

const styles = StyleSheet.create({
    top: {
        position: "absolute",
        top: 60,
        marginHorizontal: 20,
        width: Dimensions.get("window").width - 40,
        flex: 1,
        gap: 12,
        alignItems: "center",
        flexDirection: "row",
    },

    backButton: {
        width: 44,
        height: 44,
        borderRadius: 100,
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#F1F1F1",
        alignItems: "center",
        justifyContent: "center",
    },

    map: {
        width: "100%",
        height: "100%",
    },

    cluster: {
        width: 60,
        height: 60,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    },

    clusterText: {
        fontFamily: "Nunito_400Regular",
        color: "#FFFFFF",
        fontSize: 14,
    },

    markerContainer: {
        width: 40,
        height: 28,
    },

    marker: {
        width: "100%",
        height: 24,
        justifyContent: "center",
        alignItems: "center",
    },

    markerText: {
        color: "#FFFFFF",
        fontFamily: "Nunito_400Regular",
        fontSize: 12,
    },

    down: {
        position: "absolute",
        bottom: 90,
        width: "100%",
    },

    button: {
        height: 44,
        marginHorizontal: "auto",
        backgroundColor: "#ffffff",
        borderRadius: 40,
        justifyContent: "center",
    },

    buttonStyle: {
        flexDirection: "row",
        gap: 12,
        marginHorizontal: 24,
        marginVertical: 8,
        alignItems: "center",
    },

    filterText: {
        color: "#6F707A",
        fontFamily: "Nunito_400Regular",
        fontSize: 16,
    },

    overlay: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        // zIndex: 1,
    },
});

export default styles;
