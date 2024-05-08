import React, { useState } from "react";
import { Text, View } from "react-native";

import Logo from "../ui/Logo/Logo";
import Goals from "./pages/Goals/Goals";

import styles from "./registrationStyles";

const Registration = () => {
    const [questionNumber, setQuestionNumber] = useState(1);

    const handleNextClick = () => {
        if (questionNumber < 5) {
            // setQuestionNumber(questionNumber + 1);
            console.log(questionNumber);
        } else {
            // navigate("/");
        }
    };

    return (
        <View style={styles.container}>
            <Logo />
            {questionNumber === 1 && <Goals onPress={handleNextClick} />}
        </View>
    );
};

export default Registration;
