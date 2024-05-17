import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useRef, useState } from "react";
import RBSheet from "react-native-raw-bottom-sheet";

import CloseCrossSvg from "../../../assets/svg/CloseCrossSvg";
import DropDownList from "../ui/DropDownList/DropDownList";
import ModalWithCross from "../ui/ModalWithCross/ModalWithCross";

import Freezone from "../Freezone";
import Mainland from "../Mainland";
import Comparison from "../Comparison/Comparison";

import FreelanceVisa from "./vises/FreelanceVisa";
import EmployeeVisa from "./vises/EmployeeVisa";
import GoldenVisa from "./vises/GoldenVisa";
import InvestorVisa from "./vises/InvestorVisa";
import RetirementVisa from "./vises/RetirementVisa";

import AccountingSupport from "./AccountingSupport/AccountingSupport";
import Employment from "./Employment/Employment";
import RegistrationTrademark from "./RegistrationTrademark/RegistrationTrademark";
import PowersOfAttorney from "./PowersOfAttorney/PowersOfAttorney";

import styles from "./ourServicesStyles";

const OurServices = () => {
    const company = ["Freezone", "Mainland", "Comparison"];
    const visa = ["Golden visa", "Freelance visa", "Investor visa", "Retirement visa", "Employee Visa"];

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedVisa, setSelectedVisa] = useState(null);
    const [selectedService, setSelectedService] = useState(null);

    const refScrollable = useRef();

    const handleSelectService = (service) => {
        setSelectedVisa(service);
        setModalVisible(true);
    };

    const handleCallModalWindow = (component) => {
        setSelectedService(component);
        refScrollable.current.open();
    };

    const handleSelectCompanyRegistration = (selectedCompanyRegistration) => {
        switch (selectedCompanyRegistration) {
            case "Freezone":
                return handleCallModalWindow(<Freezone />);
            case "Mainland":
                return handleCallModalWindow(<Mainland />);
            case "Comparison":
                return handleCallModalWindow(<Comparison />);
        }
    };

    const renderSelectedVisa = (selectedVisa) => {
        switch (selectedVisa) {
            case "Freelance visa":
                return <FreelanceVisa handleClose={() => setModalVisible(false)} />;
            case "Employee Visa":
                return <EmployeeVisa handleClose={() => setModalVisible(false)} />;
            case "Golden visa":
                return <GoldenVisa handleClose={() => setModalVisible(false)} />;
            case "Investor visa":
                return <InvestorVisa handleClose={() => setModalVisible(false)} />;
            case "Retirement visa":
                return <RetirementVisa handleClose={() => setModalVisible(false)} />;
        }
    };

    return (
        <>
            <View style={styles.ourServices}>
                <View style={styles.header}>
                    <Text style={styles.title}>Our services</Text>
                    <TouchableOpacity style={styles.close}>
                        <CloseCrossSvg />
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.menu}>
                        <DropDownList text="Company registration" list={company} onItemSelected={handleSelectCompanyRegistration} />
                        <DropDownList text="Visa processing" list={visa} onItemSelected={handleSelectService} />

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                handleCallModalWindow(<AccountingSupport />);
                            }}
                        >
                            <Text style={styles.text}>Accounting support</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                handleCallModalWindow(<Employment />);
                            }}
                        >
                            <Text style={styles.text}>Employment</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                handleCallModalWindow(<RegistrationTrademark />);
                            }}
                        >
                            <Text style={styles.text}>TM Registration</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                handleCallModalWindow(<PowersOfAttorney />);
                            }}
                        >
                            <Text style={styles.text}>Registration of powers of attorney</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

            {modalVisible && <View style={styles.overlay}></View>}
            <ModalWithCross visible={modalVisible}>{renderSelectedVisa(selectedVisa)}</ModalWithCross>
            <RBSheet
                closeOnPressBack={true}
                ref={refScrollable}
                draggable
                customModalProps={{
                    animationType: "slide",
                    statusBarTranslucent: true,
                }}
                customStyles={{
                    container: {
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                        height: "96%",
                    },
                    draggableIcon: {
                        backgroundColor: "#D9D9D9",
                        width: 64,
                    },
                }}
            >
                <ScrollView showsVerticalScrollIndicator={false}>{selectedService}</ScrollView>
            </RBSheet>
        </>
    );
};

export default OurServices;
