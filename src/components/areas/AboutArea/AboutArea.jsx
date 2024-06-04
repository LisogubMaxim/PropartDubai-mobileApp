import { ImageBackground, Modal, ScrollView, StatusBar, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

import aboutAreaData from "../../../data/area/aboutAreaData";

import styles from "./AboutAreaStyles";
import BackSvg from "../../../../assets/svg/BackSvg";
import CategorySwitcher from "../../ui/CategorySwitcher/CategorySwitcher";
import PropertyCard from "../../ui/PropertyCard/PropertyCard";
import GetConsultation from "../../ui/GetConsultation/GetConsultation";
import MenuBar from "../../ui/MenuBar/MenuBar";
import { useState } from "react";
import AreaProperties from "../AreaProperties/AreaProperties";

const AboutArea = ({ onCloseModal }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handlePressMore = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <View style={styles.aboutArea}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ImageBackground source={aboutAreaData.image} style={styles.header}>
                        <TouchableOpacity style={styles.back} onPress={onCloseModal}>
                            <BackSvg />
                        </TouchableOpacity>
                        <View style={styles.headerText}>
                            <Text style={styles.title}>{aboutAreaData.title}</Text>
                            <Text style={styles.price}>{aboutAreaData.price}</Text>
                        </View>
                    </ImageBackground>
                    <View style={styles.body}>
                        <View style={styles.description}>
                            <Text style={styles.titleBody}>Description</Text>
                            <Text style={styles.text}>{aboutAreaData.description}</Text>
                        </View>
                        <View style={{ marginBottom: 40 }}>
                            <CategorySwitcher data={aboutAreaData.moreInformation} />
                        </View>
                        <View style={styles.property}>
                            <View style={styles.top}>
                                <Text style={styles.titleBody}>Property in Business Bay</Text>
                                <TouchableOpacity onPress={handlePressMore}>
                                    <Text style={styles.more}>More</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <ScrollView
                        horizontal
                        contentContainerStyle={{ paddingHorizontal: 20 }}
                        showsHorizontalScrollIndicator={false}
                        style={{ marginBottom: 48 }}
                    >
                        <View style={styles.slider}>
                            {aboutAreaData.property.map((item, index) => (
                                <View key={index}>
                                    <PropertyCard
                                        image={item.image}
                                        title={item.title}
                                        width={320}
                                        height={228}
                                        amount={item.price}
                                        isButton={true}
                                    />
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                    <View style={styles.body}>
                        <View style={{ marginBottom: 150 }}>
                            <Text style={styles.titleBody}>Get help from our expert</Text>
                            <GetConsultation
                                text={"Our specialist will help you with any question you may have - we are here to help you!"}
                            />
                        </View>
                    </View>
                </ScrollView>
                <MenuBar />
            </View>

            <Modal visible={isModalVisible} animationType="slide">
                <StatusBar backgroundColor="rgba(0,0,0,0.5)" barStyle="light-content" />
                <AreaProperties onCloseModal={closeModal} />
            </Modal>
        </>
    );
};

export default AboutArea;
