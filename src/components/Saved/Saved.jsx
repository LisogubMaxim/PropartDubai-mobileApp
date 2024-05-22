import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import SearchInput from "../ui/SearchInput/SearchInput";
import SortSvg from "../../../assets/svg/SortSvg";
import MenuBar from "../ui/MenuBar/MenuBar";

import savedData from "../../data/savedData";

import styles from "./savedStyles";
import PropertyCard from "../ui/PropertyCard/PropertyCard";

const Saved = ({ onCloseModal }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>Saved projects</Text>
                    <TouchableOpacity onPress={onCloseModal}>
                        <Text style={styles.change}>Change</Text>
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
                            <PropertyCard
                                image={item.image}
                                title={item.title}
                                subtitle={item.location}
                                width={"100%"}
                                height={284}
                                amount={item.price}
                                isButton={true}
                                isTwoButton={true}
                                btnType="share"
                                twoBtnType="delete"
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>
            <MenuBar colorHeart={"#333863"} />
        </View>
    );
};

export default Saved;
