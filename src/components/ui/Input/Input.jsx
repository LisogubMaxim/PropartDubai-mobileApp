import React from "react";
import { TextInput, View } from "react-native";

import CrossSvg from "../../../../assets/svg/CrossSvg";

import styles from "./inputStyles";

const Input = ({ placeholder, name, onChange, value, clearInput }) => {
    return (
        <View style={styles.input}>
            <TextInput style={styles.textInput} placeholder={placeholder} name={name} onChangeText={onChange} value={value} />
            {value && <CrossSvg onPress={clearInput} />}
        </View>
    );
};

export default Input;
