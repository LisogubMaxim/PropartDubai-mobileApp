import { View } from "react-native";

import MenuBarSvg from "../../../../assets/svg/menuBar/MenuBarSvg";
import SearchSvg from "../../../../assets/svg/menuBar/SearchSvg";
import HomeSvg from "../../../../assets/svg/menuBar/HomeSvg";
import HeartSvg from "../../../../assets/svg/menuBar/HeartSvg";
import MessageSvg from "../../../../assets/svg/menuBar/MessageSvg";
import ProfileSvg from "../../../../assets/svg/menuBar/ProfileSvg";

import styles from "./menuBarStyles";

const MenuBar = () => {
    return (
        // <View style={styles.container}>
        <View style={styles.menuBar}>
            <MenuBarSvg />
            <View style={styles.search}>
                <View style={styles.circle}>
                    <SearchSvg />
                </View>
            </View>
            <View style={styles.navigate}>
                <View style={styles.halfNav}>
                    <HomeSvg />
                    <HeartSvg />
                </View>
                <View style={styles.halfNav}>
                    <MessageSvg />
                    <ProfileSvg />
                </View>
            </View>
        </View>
        // </View>
    );
};

export default MenuBar;
