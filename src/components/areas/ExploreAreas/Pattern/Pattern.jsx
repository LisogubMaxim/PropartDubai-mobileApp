import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

import styles from "./patternStyles";
import { useState } from "react";
import RightSheetModal from "../../../ui/RightSheetModal/RightSheetModal";
import AboutArea from "../../AboutArea/AboutArea";

const Pattern = ({ data }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalComponent, setModalComponent] = useState(null);

    const showModal = (component) => {
        setModalComponent(component);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <View style={{ gap: 12 }}>
            <View style={styles.block}>
                <TouchableOpacity style={styles.vertical} onPress={() => showModal(<AboutArea onCloseModal={closeModal} />)}>
                    <ImageBackground source={data[0].image} imageStyle={{ borderRadius: 10 }} style={styles.image}>
                        <View style={styles.text}>
                            <Text style={styles.title}>{data[0].title}</Text>
                            <Text style={styles.price}>from $ {data[0].price}</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <View style={styles.vertical}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => showModal(<AboutArea onCloseModal={closeModal} />)}>
                        <ImageBackground source={data[1].image} imageStyle={{ borderRadius: 10 }} style={styles.image}>
                            <View style={styles.text}>
                                <Text style={styles.title}>{data[1].title}</Text>
                                <Text style={styles.price}>from $ {data[1].price}</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: 1 }} onPress={() => showModal(<AboutArea onCloseModal={closeModal} />)}>
                        <ImageBackground source={data[2].image} imageStyle={{ borderRadius: 10 }} style={styles.image}>
                            <View style={styles.text}>
                                <Text style={styles.title}>{data[2].title}</Text>
                                <Text style={styles.price}>from $ {data[2].price}</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.horizontal}>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => showModal(<AboutArea onCloseModal={closeModal} />)}>
                    <ImageBackground source={data[3].image} imageStyle={{ borderRadius: 10 }} style={styles.image}>
                        <View style={styles.text}>
                            <Text style={styles.title}>{data[3].title}</Text>
                            <Text style={styles.price}>from $ {data[3].price}</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            <View style={styles.block}>
                <View style={styles.vertical}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => showModal(<AboutArea onCloseModal={closeModal} />)}>
                        <ImageBackground source={data[4].image} imageStyle={{ borderRadius: 10 }} style={styles.image}>
                            <View style={styles.text}>
                                <Text style={styles.title}>{data[4].title}</Text>
                                <Text style={styles.price}>from $ {data[4].price}</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: 1 }} onPress={() => showModal(<AboutArea onCloseModal={closeModal} />)}>
                        <ImageBackground source={data[5].image} imageStyle={{ borderRadius: 10 }} style={styles.image}>
                            <View style={styles.text}>
                                <Text style={styles.title}>{data[5].title}</Text>
                                <Text style={styles.price}>from $ {data[5].price}</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.vertical} onPress={() => showModal(<AboutArea onCloseModal={closeModal} />)}>
                    <ImageBackground source={data[6].image} imageStyle={{ borderRadius: 10 }} style={styles.image}>
                        <View style={styles.text}>
                            <Text style={styles.title}>{data[6].title}</Text>
                            <Text style={styles.price}>from $ {data[6].price}</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            <RightSheetModal visible={isModalVisible}>{modalComponent}</RightSheetModal>
        </View>
    );
};

export default Pattern;
