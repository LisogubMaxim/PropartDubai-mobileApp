import { ScrollView, Text, View } from "react-native";

import Slider from "../../ui/Slider/Slider";
import GetConsultation from "../../ui/GetConsultation/GetConsultation";

import styles from "./powersOfAttorneyStyles";

const PowersOfAttorney = () => {
    const data = [
        { title: "Registration of a POA", text: "The POA can de certified online or issued at the Dubai Court" },
        { title: "Notarization of copies ", text: "Authenticate copies of your personal documents." },
        { title: "Registration of a POA", text: "The POA can de certified online or issued at the Dubai Court" },
    ];

    return (
        <ScrollView>
            <View style={styles.powersOfAttorney}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Powers of attorney (POA)</Text>
                </View>
                <Text style={styles.text}>We work directly both with public and private notaries in the UAE.</Text>
                <View style={styles.slider}>
                    <Slider data={data} width={175} height={157} />
                </View>
                <View style={styles.body}>
                    <GetConsultation text="Contact us to arrange meeting with expert. We can help you to register a power of attorney in a few days." />
                </View>
            </View>
        </ScrollView>
    );
};

export default PowersOfAttorney;
