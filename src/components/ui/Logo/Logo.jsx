import React from "react";
import { Image, View } from "react-native";

import LogoSvg from "../../../../assets/svg/LogoSvg";

import styles from "./logoStyles";

const Logo = () => {
    return (
        <View style={styles.logo}>
            <LogoSvg />
        </View>
    );
};

export default Logo;
