import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

import MenuBar from "../ui/MenuBar/MenuBar";
import GetConsultation from "../ui/GetConsultation/GetConsultation";
import FiltersBtn from "../ui/FiltersBtn/FiltersBtn";
import SearchInput from "../ui/SearchInput/SearchInput";
import PropertyCard from "../ui/PropertyCard/PropertyCard";
import FilterPoints from "../ui/FilterPoints/FilterPoints";

import CloseCrossSvg from "../../../assets/svg/CloseCrossSvg";

import specialData from "../../data/specialData";

import styles from "./specialStyles";

const Special = () => {
    const propos = specialData.propos;
    const [filterPoints, setFilterPoints] = useState(specialData.filterPoints);

    const handleClearPoint = (point) => {
        setFilterPoints(filterPoints.filter((item) => item !== point));
    };

    const handleClearAll = (point) => {
        setFilterPoints(null);
    };

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <View style={styles.title}>
                        <Text style={styles.textTitle}>Special for you</Text>
                        <TouchableOpacity style={styles.cross}>
                            <CloseCrossSvg />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.search}>
                        <SearchInput />
                        <FiltersBtn />
                    </View>
                    {filterPoints && (
                        <FilterPoints points={filterPoints} onPressDelete={handleClearPoint} onPressClearAll={handleClearAll} />
                    )}
                </View>
                <View style={styles.body}>
                    <View style={styles.propos}>
                        {propos.map((item, index) => (
                            <View key={index}>
                                <PropertyCard
                                    image={item.img}
                                    title={item.title}
                                    subtitle={item.location}
                                    width={"100%"}
                                    height={284}
                                    amount={item.price}
                                    isButton={true}
                                />
                            </View>
                        ))}
                    </View>
                    <View style={styles.help}>
                        <Text style={styles.text}>Get help from our expert</Text>
                        <GetConsultation
                            text={"Our specialist will help you with any question you may have - we are here to help you!"}
                        />
                    </View>
                </View>
            </ScrollView>
            <MenuBar />
        </View>
    );
};

export default Special;
