import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import CloseCrossSvg from "../../../assets/svg/CloseCrossSvg";
import DropDownList from "../ui/DropDownList/DropDownList";

import styles from "./ourServicesStyles";

const OurServices = () => {
    const company = ["Freezone", "Mainland", "Comparison"];

    const visa = ["Gloden visa", "Freelance visa", "Investor visa", "Retirement visa", "Employee Visa"];

    return (
        <View style={styles.ourServices}>
            <View style={styles.header}>
                <Text style={styles.title}>Our services</Text>
                <TouchableOpacity style={styles.close}>
                    <CloseCrossSvg />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.menu}>
                    <DropDownList text="Company registration" list={company} />
                    <DropDownList text="Visa processing" list={visa} />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Accounting support</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Employment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>TM Registration</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Registration of powers of attorney</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default OurServices;
