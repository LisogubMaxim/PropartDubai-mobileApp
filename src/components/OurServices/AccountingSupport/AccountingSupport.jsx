import { ScrollView, Text, View } from "react-native";

import Slider from "../../ui/Slider/Slider";
import InformationPoints from "../../ui/InformationPoints/InformationPoints";
import PointsChain from "../../ui/PointsChain/PointsChain";
import GetConsultation from "../../ui/GetConsultation/GetConsultation";

import { AccountingSupportData } from "../../../data/data";

import styles from "./accountingSupportStyles";

const AccountingSupport = () => {
    return (
        <ScrollView>
            <View style={styles.accountingSupport}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Accounting support</Text>
                </View>
                <Text style={styles.text}>
                    We provide comprehensive accounting, financial reporting, and tax compliance services to our clients
                </Text>
                <View style={styles.slider}>
                    <Slider data={AccountingSupportData.slider} width={171} height={152} />
                </View>
                <View style={styles.body}>
                    <View style={styles.accountingServices}>
                        <Text style={styles.title}>Our accounting services</Text>
                        <InformationPoints data={AccountingSupportData.points} />
                    </View>
                    <View style={styles.informationGetSupport}>
                        <Text style={styles.titleInformationGetSupport}>How to get accounting support</Text>
                        <PointsChain data={AccountingSupportData.pointsChain} />
                    </View>

                    <GetConsultation text="Contact us to arrange meeting with expert. We can help you with your accounting and reporting." />
                </View>
            </View>
        </ScrollView>
    );
};

export default AccountingSupport;
