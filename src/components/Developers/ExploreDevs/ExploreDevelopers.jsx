import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";

import MenuBar from "../../ui/MenuBar/MenuBar";
import GetConsultation from "../../ui/GetConsultation/GetConsultation";
import SearchInput from "../../ui/SearchInput/SearchInput";
import SortBtn from "../../ui/SortBtn/SortBtn";

import CloseCrossSvg from "../../../../assets/svg/CloseCrossSvg";

import { developers } from "../../../data/developers/developersData";

import styles from "./exploreDevelopersStyles";
import RightSheetModal from "../../ui/RightSheetModal/RightSheetModal";
import AboutDeveloper from "../AboutDev/AboutDeveloper";

const ExploreDevelopers = ({ onCloseModal }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
        <View style={styles.exploreDevelopers}>
            <View style={styles.container}>
                <View style={[styles.block, { marginTop: 60 }]}>
                    <Text style={styles.mainTitle}>Explore developers</Text>
                    <TouchableOpacity style={styles.close} onPress={onCloseModal}>
                        <CloseCrossSvg />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputBlock}>
                    <SearchInput placeholder="Enter the developer's name" />
                    <SortBtn />
                </View>
                <ScrollView>
                    <View
                        style={{
                            gap: 12,
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                        }}
                    >
                        {developers.map((item, idx) => (
                            <TouchableOpacity key={idx} onPress={() => setIsModalVisible(true)}>
                                <Image source={item.logo} style={styles.logo} />
                            </TouchableOpacity>
                        ))}
                    </View>
                    <Text style={styles.getHelp}>Get help from our expert</Text>
                    <GetConsultation text="Our specialist will help you with any question you may have - we are here to help you!" />
                    <View style={{ height: 150 }} />
                </ScrollView>
            </View>
            <MenuBar />
            <RightSheetModal visible={isModalVisible}>
                <AboutDeveloper onCloseModal={() => setIsModalVisible(false)} />
            </RightSheetModal>
        </View>
    );
};

export default ExploreDevelopers;
