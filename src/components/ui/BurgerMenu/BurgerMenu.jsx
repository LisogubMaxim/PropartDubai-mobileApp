import React, { useRef, useEffect, useState } from "react";
import { View, Text, Animated, TouchableOpacity, Dimensions, Modal } from "react-native";

import CloseBurgerMenuSvg from "../../../../assets/svg/CloseBurgerMenuSvg";
import MenuItem from "./MenuItem/MenuItem";

import styles from "./burgerMenuStyles";
import ExploreAreas from "../../areas/ExploreAreas/ExploreAreas";
import ExploreDevelopers from "../../Developers/ExploreDevs/ExploreDevelopers";
import RightSheetModal from "../RightSheetModal/RightSheetModal";
import MapComponent from "../../Map/MapComponent";
import OurServices from "../../OurServices/OurServices";

const BurgerMenu = ({ isMenuOpen, closeMenu }) => {
    const menuWidth = Dimensions.get("window").width * 0.7;
    const animation = useRef(new Animated.Value(isMenuOpen ? 1 : 0)).current;

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalComponent, setModalComponent] = useState(null);

    const handleOnPressProperties = (component) => {
        switch (component) {
            case "All properties":
                // return showModal(<OurServices onCloseModal={closeModal} />);
                console.log(component);
            case "From agents":
                // return showModal(<OurServices onCloseModal={closeModal} />);
                console.log(component);
        }
    };

    const handleOnPressConsulting = (component) => {
        switch (component) {
            case "How we works":
                // return showModal(<OurServices onCloseModal={closeModal} />);
                console.log(component);
            case "Our services":
                return showModal(<OurServices onCloseModal={closeModal} />);
        }
    };

    const showModal = (component) => {
        setModalComponent(component);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        Animated.timing(animation, {
            toValue: isMenuOpen ? 1 : 0,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [isMenuOpen]);

    const menuTranslateX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [menuWidth, 0],
    });

    return (
        <>
            {isMenuOpen && <View style={styles.overlay}></View>}
            <Animated.View
                style={[
                    styles.menu,
                    {
                        transform: [{ translateX: menuTranslateX }],
                    },
                ]}
            >
                <View style={styles.header}>
                    <Text style={styles.title}>Menu</Text>
                    <TouchableOpacity style={styles.close} onPress={closeMenu}>
                        <CloseBurgerMenuSvg />
                    </TouchableOpacity>
                </View>

                <View style={styles.list}>
                    <MenuItem
                        title={"Properties"}
                        list={["All properties", "From agents"]}
                        isBorder={true}
                        onPress={handleOnPressProperties}
                    />
                    <MenuItem title={"Areas"} onPress={() => showModal(<ExploreAreas onCloseModal={closeModal} />)} />
                    <MenuItem title={"Developers"} onPress={() => showModal(<ExploreDevelopers onCloseModal={closeModal} />)} />
                    <MenuItem title={"Map"} onPress={() => showModal(<MapComponent onCloseModal={closeModal} />)} />
                    <MenuItem title={"Consulting"} list={["How we works", "Our services"]} onPress={handleOnPressConsulting} />
                </View>
            </Animated.View>

            <RightSheetModal visible={isModalVisible}>{modalComponent}</RightSheetModal>
        </>
    );
};

export default BurgerMenu;

// вызов BurgerMenu

// const [isMenuOpen, setIsMenuOpen] = useState(false);

// const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
// };

// <Button title="Menu" onPress={toggleMenu} />
/* <BurgerMenu isMenuOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} /> */
