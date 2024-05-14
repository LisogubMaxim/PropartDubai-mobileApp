import { ScrollView, Text, View } from "react-native";

import Slider from "../../ui/Slider/Slider";
import GetConsultation from "../../ui/GetConsultation/GetConsultation";
import EmploymentOptions from "../../ui/EmploymentOptions/EmploymentOptions";

import { EmploymentData } from "../../../data/data";

import styles from "./employmentStyles";

const Employment = () => {
    return (
        <ScrollView>
            <View style={styles.employment}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Employment</Text>
                </View>
                <Text style={styles.text}>We specializes in providing employment services and obtaining work visas in the UAE</Text>
                <View style={styles.slider}>
                    <Text style={styles.sliderTitle}>What we can</Text>
                    <Slider data={EmploymentData} width={205} height={174} />
                </View>
                <View style={styles.body}>
                    <Text style={styles.title}>Employment options</Text>
                    <View style={styles.employmentOptions}>
                        <EmploymentOptions text="Freelance visa" />
                        <EmploymentOptions text="Employee visa" />
                    </View>
                    <GetConsultation text="Contact us to arrange meeting with expert. We can help you to register a power of attorney in a few days." />
                </View>
            </View>
        </ScrollView>
    );
};

export default Employment;
