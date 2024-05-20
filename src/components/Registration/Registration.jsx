import React, { useState } from "react";
import { Text, View } from "react-native";

import Logo from "../ui/Logo/Logo";
import Goals from "./pages/Goals/Goals";
import PersonalInformation from "./pages/PersonalInformation/PersonalInformation";
import HouseType from "./pages/HouseType/HouseType";
import Navigation from "./pages/Navigation/Navigation";
import Price from "./pages/Price/Price";
import NumberOfRooms from "./pages/NumberOfRooms/NumberOfRooms";

import styles from "./registrationStyles";

const Registration = ({ navigation }) => {
    const [questionNumber, setQuestionNumber] = useState(1);

    const handleNextClick = () => {
        if (questionNumber < 5) {
            setQuestionNumber(questionNumber + 1);
        } else {
            navigation.navigate("Main");
        }
    };

    return (
        <View style={styles.container}>
            <Logo />
            {questionNumber === 1 && <Goals onPress={handleNextClick} />}
            {questionNumber === 2 && <PersonalInformation onPress={handleNextClick} />}
            {questionNumber === 3 && <HouseType />}
            {questionNumber === 4 && <Price />}
            {questionNumber === 5 && <NumberOfRooms />}

            {questionNumber > 2 && (
                <Navigation handleNextClick={handleNextClick} handleSkipClick={() => navigation.navigate("Main")} />
            )}
        </View>
    );
};

export default Registration;
