import { Text, TouchableOpacity, View } from "react-native";

import CloseCrossSvg from "../../../../assets/svg/CloseCrossSvg";
import InformationPanel from "../../ui/InformationPanel/InformationPanel";
import InformationPoints from "../../ui/InformationPoints/InformationPoints";
import Slider from "../../ui/Slider/Slider";

import { EmployeeVisaData } from "../../../data/data";

import styles from "./visaStyles";

const EmployeeVisa = ({ handleClose }) => {
    return (
        <View style={styles.visa}>
            <View style={styles.header}>
                <Text style={styles.title}>Employee visa</Text>
                <TouchableOpacity onPress={handleClose}>
                    <CloseCrossSvg />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <Text style={styles.text}>Applying for an employee visa through hiring and drawing up an employment contract.</Text>
                <View style={styles.informationPanel}>
                    <View style={styles.row}>
                        <View style={{ flex: 1 }}>
                            <InformationPanel title="Validity" topText="2" topTextSize={24} bottomText="years" bottomTextSize={14} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <InformationPanel
                                title="Terms"
                                topText="10"
                                topTextSize={24}
                                bottomText="working days"
                                bottomTextSize={14}
                            />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={{ flex: 1 }}>
                            <InformationPanel
                                title="Price Freezone"
                                titleColor="#FFFFFF"
                                topText="AED"
                                topTextSize={14}
                                bottomText="7,000"
                                bottomTextSize={24}
                                backgroundColor="#333863"
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <InformationPanel
                                title="Price Mainland"
                                titleColor="#FFFFFF"
                                topText="AED"
                                topTextSize={14}
                                bottomText="8,000"
                                bottomTextSize={24}
                                backgroundColor="#333863"
                            />
                        </View>
                    </View>
                </View>
                <View style={{ marginBottom: 32 }}>
                    <Text style={styles.bodyTitle}>Requirements:</Text>
                    <InformationPoints data={EmployeeVisaData.Requirements} />
                </View>
            </View>
            <View>
                <Text style={[styles.bodyTitle, { marginLeft: 20 }]}>Pros</Text>
                <Slider data={EmployeeVisaData.Pros} width={196} height={80} />
            </View>
        </View>
    );
};

export default EmployeeVisa;
