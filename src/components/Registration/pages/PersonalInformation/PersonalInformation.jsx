import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import Button from "../../../ui/Button/Button";

import styles from "./personalInformationStyles";
import Input from "../../../ui/Input/Input";

const PersonalInformation = ({ onPress }) => {
    const [isButtonActive, setIsButtonActive] = useState(false);
    const [isInputCorrect, setIsInputCorrect] = useState(false);
    const [personalInformation, setPersonalInformation] = useState({
        name: "",
        company: "",
        email: "",
    });
    const handleChangeInputsPersonalInformation = (name, value) => {
        const isCorrect = !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
        if (name === "email") {
            if (/^[a-zA-Z0-9.@]*$/.test(value)) {
                setPersonalInformation({
                    ...personalInformation,
                    [name]: value,
                });
                setIsInputCorrect(isCorrect);
                if (isCorrect) setIsButtonActive(false);
            }
        } else if (/^[a-zA-Z ]*$/.test(value)) {
            setPersonalInformation({
                ...personalInformation,
                [name]: value,
            });
        }
    };

    const handleClearInputs = (fieldName) => {
        setPersonalInformation({
            ...personalInformation,
            [fieldName]: "",
        });
    };

    useEffect(() => {
        if (!isInputCorrect) setIsButtonActive(!Object.values(personalInformation).some((value) => value === ""));
    }, [personalInformation]);

    return (
        <View>
            <Text style={styles.title}>Personal information</Text>
            <Text style={styles.text}>Please leave your personal data</Text>
            <View style={styles.inputContainer}>
                <View style={styles.input}>
                    <Input
                        name="name"
                        placeholder="Enter your name"
                        value={personalInformation.name}
                        onChange={(value) => handleChangeInputsPersonalInformation("name", value)}
                        clearInput={() => handleClearInputs("name")}
                    />
                </View>
                <View style={styles.input}>
                    <Input
                        name="company"
                        placeholder="Enter company`s name"
                        value={personalInformation.company}
                        onChange={(value) => handleChangeInputsPersonalInformation("company", value)}
                        clearInput={() => handleClearInputs("company")}
                    />
                </View>

                <Input
                    name="email"
                    placeholder="Enter your e-mail"
                    value={personalInformation.email}
                    onChange={(value) => handleChangeInputsPersonalInformation("email", value)}
                    clearInput={() => handleClearInputs("email")}
                />
            </View>
            <Button text="Save" backgroundColor={isButtonActive ? "#333863" : "#D6D7E0"} onPress={onPress} />
        </View>
    );
};

export default PersonalInformation;
