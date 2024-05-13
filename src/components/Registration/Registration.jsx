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

const Registration = () => {
    const [questionNumber, setQuestionNumber] = useState(1);

    const handleNextClick = () => {
        if (questionNumber < 5) {
            setQuestionNumber(questionNumber + 1);
        } else {
            // navigate("/");
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

            {questionNumber > 2 && <Navigation handleNextClick={handleNextClick} handleSkipClick={() => console.log("skip")} />}
        </View>
    );
};

export default Registration;
