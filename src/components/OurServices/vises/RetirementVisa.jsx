import { Text, TouchableOpacity, View } from "react-native";

import CloseCrossSvg from "../../../../assets/svg/CloseCrossSvg";
import InformationPanel from "../../ui/InformationPanel/InformationPanel";
import InformationPoints from "../../ui/InformationPoints/InformationPoints";
import Slider from "../../ui/Slider/Slider";

import { RetirementVisaData } from "../../../data/data";

import styles from "./visaStyles";

const RetirementVisa = ({ handleClose }) => {
    return (
        <View style={styles.visa}>
            <View style={styles.header}>
                <Text style={styles.title}>Retirement visa</Text>
                <TouchableOpacity onPress={handleClose}>
                    <CloseCrossSvg />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <Text style={styles.text}>Retired foreigners can apply for a long-term visa.</Text>
                <View style={styles.informationPanel}>
                    <View style={styles.row}>
                        <View style={{ flex: 1 }}>
                            <InformationPanel title="Validity" topText="5" topTextSize={24} bottomText="years" bottomTextSize={14} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <InformationPanel
                                title="Terms"
                                topText="15"
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
                <View>
                    <Text style={styles.bodyTitle}>Requirements:</Text>
                    <InformationPoints data={RetirementVisaData.Requirements} />
                </View>
            </View>
        </View>
    );
};

export default RetirementVisa;
