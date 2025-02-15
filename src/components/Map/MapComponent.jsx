import React, { useState, useRef } from "react";
import { View, Text, PanResponder, StyleSheet } from "react-native";
import SearchList from "./SearchList/SearchList";
import ClusteredMapView from "./MapView/ClusteredMapView";

const MapComponent = ({ onCloseModal }) => {
    const [isSearchListOpen, setIsSearchListOpen] = useState(false);

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                return Math.abs(gestureState.dy) > Math.abs(gestureState.dx);
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (gestureState.dy < -50) {
                    setIsSearchListOpen((prevState) => !prevState);
                }
            },
        })
    ).current;

    return (
        <View style={styles.container}>
            {isSearchListOpen ? <SearchList /> : <ClusteredMapView onPressBackButton={onCloseModal} />}
            <View {...panResponder.panHandlers} style={styles.swipeArea}>
                <View style={styles.indicator} />
                <Text style={styles.swipeUpText}>Swipe up to see {isSearchListOpen ? "map" : "list"}</Text>
            </View>
        </View>
    );
};

export default MapComponent;

const styles = StyleSheet.create({
    swipeArea: {
        height: 76,
        position: "absolute",
        width: "100%",
        alignItems: "center",
        paddingVertical: 8,
        gap: 9,
        bottom: 0,
        backgroundColor: "#fff",
        zIndex: 5,
    },
    indicator: {
        width: 32,
        height: 4,
        backgroundColor: "#0F1121",
        borderRadius: 100,
    },
    swipeUpText: {
        fontWeight: "500",
        lineHeight: 18,
    },

    container: {
        width: "100%",
        height: "100%",
    },
});
