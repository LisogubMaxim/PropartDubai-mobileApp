import { ScrollView, Text, View } from "react-native";

import Slider from "../../ui/Slider/Slider";
import InformationPoints from "../../ui/InformationPoints/InformationPoints";
import PointsChain from "../../ui/PointsChain/PointsChain";
import GetConsultation from "../../ui/GetConsultation/GetConsultation";

import styles from "./accountingSupportStyles";

const AccountingSupport = () => {
    const data = [
        { title: "Customer billing and reminders", text: "Prompt invoices and payment reminders for our clients' buyers " },
        { title: "Tax compliance advisory", text: "Consultations on timely tax registration and reporting." },
        { title: "Customer billing and reminders", text: "Prompt invoices and payment reminders for our clients' buyers " },
    ];

    const points = [
        "Accounting",
        "Managment",
        "Registration and reporting",
        "Tax consultations",
        "Beneficiary reporting",
        "AML reporting",
        "Economic Substance reporting",
    ];

    const pointsChain = [
        "Request for services",
        "Free consultation",
        "Selecting a pricing plan",
        "Selecting a pricing plan",
        "Signing an agreement on confidential information and concluding an agreement",
        "Launch of the service process and business support 24/7",
    ];

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
                    <Slider data={data} width={175} height={157} />
                </View>
                <View style={styles.body}>
                    <View style={styles.accountingServices}>
                        <Text style={styles.title}>Our accounting services</Text>
                        <InformationPoints data={points} />
                    </View>
                    <View style={styles.informationGetSupport}>
                        <Text style={styles.titleInformationGetSupport}>How to get accounting support</Text>
                        <PointsChain data={pointsChain} />
                    </View>

                    <GetConsultation text="Contact us to arrange meeting with expert. We can help you with your accounting and reporting." />
                </View>
            </View>
        </ScrollView>
    );
};

export default AccountingSupport;
