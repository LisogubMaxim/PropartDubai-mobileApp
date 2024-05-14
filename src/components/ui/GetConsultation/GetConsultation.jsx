import { Text, View } from "react-native";
import { useState } from "react";

import Input from "../Input/Input";
import Button from "../Button/Button";

import styles from "./getConsultationStyles";

const GetConsultation = ({ text }) => {
    const [inputsValue, setInputsValue] = useState({
        name: "",
        number: "",
    });

    const handleChangeInputs = (name, value) => {
        if (/^[a-zA-Z ]*$/.test(value)) {
            setInputsValue({
                ...inputsValue,
                [name]: value,
            });
        }
    };

    const handleClearInputs = (fieldName) => {
        setInputsValue({
            ...inputsValue,
            [fieldName]: "",
        });
    };

    const handlePressONButton = () => {};

    return (
        <View>
            <Text style={styles.text}>{text}</Text>
            <View style={styles.inputs}>
                <Input
                    placeholder="Your name"
                    name="name"
                    onChange={(value) => handleChangeInputs("name", value)}
                    value={inputsValue.name}
                    clearInput={() => handleClearInputs("name")}
                />

                <Input
                    placeholder="Your number"
                    name="number"
                    onChange={(value) => handleChangeInputs("number", value)}
                    value={inputsValue.number}
                    clearInput={() => handleClearInputs("number")}
                />
            </View>
            <Button text="Get a consultation" backgroundColor="#333863" onPress={handlePressONButton} />
        </View>
    );
};

export default GetConsultation;
