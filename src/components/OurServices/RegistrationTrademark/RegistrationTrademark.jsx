import { ScrollView, Text, View } from "react-native";

import InformationPoints from "../../ui/InformationPoints/InformationPoints";
import GetConsultation from "../../ui/GetConsultation/GetConsultation";
import InformationPanel from "../../ui/InformationPanel/InformationPanel";

import styles from "./registrationTrademarkStyles";

const RegistrationTrademark = () => {
    const points = [
        "TM Logo",
        "License",
        "Charter",
        "Lease agreement office",
        "Passport",
        "Visa",
        "Emirates ID card",
        "Email",
        "Phone number",
    ];

    return (
        <ScrollView>
            <View style={styles.registrationTrademark}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Registration Trademark (TM)</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.text}>
                        A UAE trademark is valid for 10 years within the UAE only; separate registration is required elsewhere.
                    </Text>
                    <View style={styles.informationPanel}>
                        <InformationPanel
                            title="1st stage"
                            titleColor="#0F1121"
                            text="Submitting an application and receiving approval"
                            topText="60-90"
                            topTextSize={32}
                            bottomText="working days"
                            bottomTextSize={14}
                            padding={16}
                        />
                        <InformationPanel
                            title="2st stage"
                            titleColor="#0F1121"
                            text="Publication in the local official newspaper"
                            topText="30"
                            topTextSize={32}
                            bottomText="working days"
                            bottomTextSize={14}
                            padding={16}
                        />
                        <InformationPanel
                            title="3st stage"
                            titleColor="#0F1121"
                            text="Obtaining a TM certificate"
                            topText="30"
                            topTextSize={32}
                            bottomText="working days"
                            bottomTextSize={14}
                            padding={16}
                        />
                        <InformationPanel
                            title="Price"
                            titleColor="#FFFFFF"
                            topText="AED"
                            topTextSize={14}
                            bottomText="13,000"
                            bottomTextSize={32}
                            backgroundColor="#333863"
                            padding={16}
                        />
                    </View>
                    <View style={styles.documentsRequired}>
                        <Text style={styles.title}>Which documents you are required</Text>
                        <InformationPoints data={points} />
                    </View>
                    <GetConsultation text="Contact us to arrange meeting with expert. We can help you to register a trademark in a few days." />
                </View>
            </View>
        </ScrollView>
    );
};

export default RegistrationTrademark;
