import React, { useRef, useEffect } from "react";
import { View, Text, Animated, TouchableOpacity, Dimensions } from "react-native";

import CloseBurgerMenuSvg from "../../../../assets/svg/CloseBurgerMenuSvg";
import MenuItem from "./MenuItem/MenuItem";

import styles from "./burgerMenuStyles";

const BurgerMenu = ({ isMenuOpen, closeMenu }) => {
    const menuWidth = Dimensions.get("window").width * 0.7;
    const animation = useRef(new Animated.Value(isMenuOpen ? 1 : 0)).current;

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
                    <MenuItem title={"Properties"} list={["All properties", "From agents"]} isBorder={true} />
                    <MenuItem title={"Areas"} />
                    <MenuItem title={"Developers"} />
                    <MenuItem title={"Map"} />
                    <MenuItem title={"Consulting"} list={["How we works", "Our services"]} />
                </View>
            </Animated.View>
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
