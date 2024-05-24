import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

import SearchInput from "../ui/SearchInput/SearchInput";
import CloseCrossSvg from "../../../assets/svg/CloseCrossSvg";
import SortSvg from "../../../assets/svg/SortSvg";

import MenuBar from "../ui/MenuBar/MenuBar";
import PropertyCardProjects from "../ui/PropertyCardProjects/PropertyCardProjects";

import savedData from "../../data/savedData";

import styles from "./myProjectsStyles";

const MyProjects = ({ onCloseModal }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>My projects</Text>
                    <TouchableOpacity style={styles.button}>
                        <CloseCrossSvg />
                    </TouchableOpacity>
                </View>
                <View style={styles.search}>
                    <SearchInput placeholder="Enter the project`s name" />
                    <TouchableOpacity style={styles.button}>
                        <SortSvg />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: 16 }}>
                <View style={styles.body}>
                    {savedData.map((item, index) => (
                        <View key={index}>
                            <PropertyCardProjects
                                image={item.image}
                                title={item.title}
                                subtitle={item.location}
                                width={"100%"}
                                height={284}
                                amount={item.price}
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>
            <MenuBar />
        </View>
    );
};

export default MyProjects;
