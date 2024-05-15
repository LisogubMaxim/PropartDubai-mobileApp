import { ScrollView, Text, View } from "react-native";
import { useState } from "react";

import Slider from "../../ui/Slider/Slider";
import GetConsultation from "../../ui/GetConsultation/GetConsultation";
import EmploymentOptions from "../../ui/EmploymentOptions/EmploymentOptions";
import ModalWithCross from "../../ui/ModalWithCross/ModalWithCross";

import FreelanceVisa from "../vises/FreelanceVisa";
import EmployeeVisa from "../vises/EmployeeVisa";

import { EmploymentData } from "../../../data/data";

import styles from "./employmentStyles";

const Employment = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedVisa, setSelectedVisa] = useState(null);

    const handleSelectService = (visa) => {
        setSelectedVisa(visa);
        setModalVisible(true);
    };

    const renderSelectedVisa = (selectedVisa) => {
        switch (selectedVisa) {
            case "Freelance visa":
                return <FreelanceVisa handleClose={() => setModalVisible(false)} />;
            case "Employee Visa":
                return <EmployeeVisa handleClose={() => setModalVisible(false)} />;
        }
    };

    return (
        <>
            <ScrollView>
                <View style={styles.employment}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Employment</Text>
                    </View>
                    <Text style={styles.text}>
                        We specializes in providing employment services and obtaining work visas in the UAE
                    </Text>
                    <View style={styles.slider}>
                        <Text style={styles.sliderTitle}>What we can</Text>
                        <Slider data={EmploymentData} width={205} height={174} />
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.title}>Employment options</Text>
                        <View style={styles.employmentOptions}>
                            <EmploymentOptions
                                text="Freelance visa"
                                onPressInformationCircle={() => handleSelectService("Freelance visa")}
                            />
                            <EmploymentOptions
                                text="Employee visa"
                                onPressInformationCircle={() => handleSelectService("Employee Visa")}
                            />
                        </View>
                        <GetConsultation text="Contact us to arrange meeting with expert. We can help you to register a power of attorney in a few days." />
                    </View>
                </View>
            </ScrollView>

            {modalVisible && (
                <>
                    <View style={styles.overlay}></View>
                    <ModalWithCross visible={modalVisible}>{renderSelectedVisa(selectedVisa)}</ModalWithCross>
                </>
            )}
        </>
    );
};

export default Employment;
