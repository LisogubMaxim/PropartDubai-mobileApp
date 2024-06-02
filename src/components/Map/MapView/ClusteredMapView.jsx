import React, { useState, useEffect, useRef } from "react";
import { Animated, Dimensions, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import SuperCluster from "supercluster";

import PropertyCard from "../../ui/PropertyCard/PropertyCard";
import image from "../../../../assets/images/map/image.png";
import imageOpacity from "../../../../assets/images/map/imageOpacity.png";
import FilterSvg from "../../../../assets/svg/FilterSvg";
import BackSvg from "../../../../assets/svg/BackSvg";
import SearchInput from "../../ui/SearchInput/SearchInput";
import Filters from "../../Filters/Filters";
import ModalWithCross from "../../ui/ModalWithCross/ModalWithCross";

import mapData from "../../../data/mapData";

import styles from "./mapComponentStyles";

const ClusteredMapView = ({ onPressBackButton }) => {
    const [markers, setMarkers] = useState([]);
    const [selectedMarkerId, setSelectedMarkerId] = useState(null);
    const [selectedMarkersId, setSelectedMarkersId] = useState(null);
    const [selectedClusterId, setSelectedClusterId] = useState(null);
    const [filtersVisible, setFiltersVisible] = useState(false);

    const superClusterRef = useRef(new SuperCluster({ radius: 100, maxZoom: 16 }));

    const getCenter = (markers) => {
        const lats = markers.map((marker) => marker.coordinate.latitude);
        const lons = markers.map((marker) => marker.coordinate.longitude);
        const minLat = Math.min(...lats);
        const maxLat = Math.max(...lats);
        const minLon = Math.min(...lons);
        const maxLon = Math.max(...lons);
        return {
            latitude: (minLat + maxLat) / 2,
            longitude: (minLon + maxLon) / 2,
            latitudeDelta: maxLat - minLat + 0.01,
            longitudeDelta: maxLon - minLon + 0.01,
        };
    };

    const initialRegion = getCenter(mapData);

    useEffect(() => {
        const superCluster = superClusterRef.current;

        const points = mapData.map(({ id, coordinate, price }) => ({
            type: "Feature",
            properties: { cluster: false, markerId: id, price: price },
            geometry: {
                type: "Point",
                coordinates: [coordinate.longitude, coordinate.latitude],
            },
        }));

        superCluster.load(points);

        const bbox = [
            initialRegion.longitude - initialRegion.longitudeDelta / 2,
            initialRegion.latitude - initialRegion.latitudeDelta / 2,
            initialRegion.longitude + initialRegion.longitudeDelta / 2,
            initialRegion.latitude + initialRegion.latitudeDelta / 2,
        ];
        const zoom = Math.round(Math.log2(360 / initialRegion.longitudeDelta));

        const clusters = superCluster.getClusters(bbox, zoom);
        setMarkers(clusters);
    }, []);

    const handleRegionChangeComplete = (region) => {
        const superCluster = superClusterRef.current;

        const bbox = [
            region.longitude - region.longitudeDelta / 2,
            region.latitude - region.latitudeDelta / 2,
            region.longitude + region.longitudeDelta / 2,
            region.latitude + region.latitudeDelta / 2,
        ];
        const zoom = Math.round(Math.log2(360 / region.longitudeDelta));

        const clusters = superCluster.getClusters(bbox, zoom);
        setMarkers(clusters);
    };

    const handleClusterPress = (cluster) => {
        const superCluster = superClusterRef.current;
        const children = superCluster.getLeaves(cluster.id, Infinity);
        setSelectedMarkersId(mapData.filter((item) => children.map((child) => child.properties.markerId).includes(item.id)));
        setSelectedMarkerId(null);
    };

    const handleMarkerPress = (markerId) => {
        setSelectedMarkerId(mapData.find((elem) => elem.id === markerId));
        setSelectedMarkersId(null);
        setSelectedClusterId(null);
    };

    const height = Dimensions.get('window').height;
    const position = useRef(new Animated.Value(height)).current

    useEffect(() => {
        Animated.timing(position, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [height])

    return (
        <Animated.View
            style={{ flex: 1, transform: [{ translateY: position }] }}
        >
            <MapView
                style={{ flex: 1 }}
                initialRegion={initialRegion}
                onRegionChangeComplete={handleRegionChangeComplete}
                toolbarEnabled={false}
                onPress={(e) => {
                    if (e.target === e.currentTarget) {
                        setSelectedMarkerId(null);
                        setSelectedMarkersId(null);
                        setSelectedClusterId(null);
                    }
                }}
            >
                {markers.map((marker) => {
                    if (marker.properties.cluster) {
                        return (
                            <Marker
                                key={`cluster-${marker.id}`}
                                coordinate={{
                                    latitude: marker.geometry.coordinates[1],
                                    longitude: marker.geometry.coordinates[0],
                                }}
                                onPress={() => {
                                    handleClusterPress(marker);
                                    setSelectedClusterId(marker.id);
                                }}
                            >
                                <View
                                    style={[
                                        styles.cluster,
                                        {
                                            backgroundColor:
                                                selectedClusterId === marker.id ? "rgba(51,56,99,1)" : "rgba(51,56,99,0.5)",
                                        },
                                    ]}
                                >
                                    <Text style={styles.clusterText}>{marker.properties.point_count}</Text>
                                </View>
                            </Marker>
                        );
                    } else {
                        return (
                            <Marker
                                key={`marker-${marker.properties.markerId}`}
                                coordinate={{
                                    latitude: marker.geometry.coordinates[1],
                                    longitude: marker.geometry.coordinates[0],
                                }}
                                onPress={() => handleMarkerPress(marker.properties.markerId)}
                            >
                                <ImageBackground
                                    style={styles.markerContainer}
                                    source={
                                        selectedMarkerId && selectedMarkerId.id === marker.properties.markerId ? image : imageOpacity
                                    }
                                >
                                    <View style={styles.marker}>
                                        <Text style={styles.markerText}>{marker.properties.price}</Text>
                                    </View>
                                </ImageBackground>
                            </Marker>
                        );
                    }
                })}
            </MapView>

            <View style={styles.top}>
                <TouchableOpacity style={styles.backButton} onPress={onPressBackButton}>
                    <BackSvg color={"#6F707A"} />
                </TouchableOpacity>
                <View style={{ zIndex: 1, flex: 1 }}>
                    <SearchInput placeholder={"Search"} />
                </View>
            </View>

            <View style={styles.down}>
                {(selectedMarkersId && (
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }}>
                        <View style={{ flexDirection: "row", gap: 12 }}>
                            {selectedMarkersId.map((item, index) => (
                                <View key={index}>
                                    <PropertyCard
                                        image={item.image}
                                        title={item.title}
                                        subtitle={item.location}
                                        width={350}
                                        height={264}
                                        amount={item.price}
                                        isButton={true}
                                    />
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                )) ||
                    (selectedMarkerId && (
                        <View style={{ marginHorizontal: "auto" }}>
                            <PropertyCard
                                image={selectedMarkerId.image}
                                title={selectedMarkerId.title}
                                subtitle={selectedMarkerId.location}
                                width={350}
                                height={284}
                                amount={selectedMarkerId.price}
                                isButton={true}
                                isTwoButton={true}
                                btnType={"close"}
                                ButtonPress={() => setSelectedMarkerId(null)}
                            />
                        </View>
                    )) || (
                        <TouchableOpacity style={styles.button} onPress={() => setFiltersVisible(true)}>
                            <View style={styles.buttonStyle}>
                                <FilterSvg />
                                <Text style={styles.filterText}>Filter</Text>
                            </View>
                        </TouchableOpacity>
                    )}
            </View>

            {filtersVisible && <View style={styles.overlay}></View>}
            <ModalWithCross visible={filtersVisible}>
                <Filters onCloseModal={() => setFiltersVisible(false)} />
            </ModalWithCross>
        </Animated.View>
    );
};

export default ClusteredMapView;