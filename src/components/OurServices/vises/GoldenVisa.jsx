import { Text, View } from "react-native";

import CloseCrossSvg from "../../../../assets/svg/CloseCrossSvg";
import InformationPanel from "../../ui/InformationPanel/InformationPanel";
import InformationPoints from "../../ui/InformationPoints/InformationPoints";
import Slider from "../../ui/Slider/Slider";

import { GoldenVisaData } from "../../../data/data";

import styles from "./visaStyles";

const GoldenVisa = ({ handleClose }) => {
    return (
        <View style={styles.visa}>
            <View style={styles.header}>
                <Text style={styles.title}>Golden visa</Text>
                <CloseCrossSvg onPress={handleClose} />
            </View>
            <View style={styles.body}>
                <Text style={styles.text}>Applying for an employee visa through hiring and drawing up an employment contract.</Text>
                <View style={styles.informationPanel}>
                    <View style={styles.row}>
                        <View style={{ flex: 1 }}>
                            <InformationPanel title="Validity" topText="10" topTextSize={24} bottomText="years" bottomTextSize={14} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <InformationPanel
                                title="Terms"
                                topText="8"
                                topTextSize={24}
                                bottomText="working days"
                                bottomTextSize={14}
                            />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={{ flex: 1 }}>
                            <InformationPanel
                                title="Price"
                                titleColor="#FFFFFF"
                                topText="AED"
                                topTextSize={14}
                                bottomText="15,000"
                                bottomTextSize={24}
                                backgroundColor="#333863"
                            />
                        </View>
                        <View style={{ flex: 1 }}></View>
                    </View>
                </View>
                <View style={{ marginBottom: 32 }}>
                    <Text style={styles.bodyTitle}>Requirements:</Text>
                    <InformationPoints data={GoldenVisaData.Requirements} />
                </View>
            </View>
            <View>
                <Text style={[styles.bodyTitle, { marginLeft: 20 }]}>Pros</Text>
                <Slider data={GoldenVisaData.Pros} width={196} height={80} />
            </View>
        </View>
    );
};

export default GoldenVisa;
