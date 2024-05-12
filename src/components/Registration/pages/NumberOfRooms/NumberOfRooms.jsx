import { Text, View } from "react-native";
import { useState } from "react";

import SelectionButton from "../../../ui/customSelectionButton/SelectionButton/SelectionButton";

import styles from "./numberOfRoomsStyles";

const NumberOfRooms = () => {
    const [numberOfRooms, setNumberOfRooms] = useState([]);

    const handleNumberOfRoomsSelection = (number, isSelected) => {
        if (isSelected) {
            setNumberOfRooms([...numberOfRooms, number]);
        } else {
            setNumberOfRooms(numberOfRooms.filter((type) => type !== number));
        }
    };

    return (
        <View>
            <Text style={styles.title}>How many rooms?</Text>
            <View style={styles.container}>
                <View style={styles.row}>
                    <SelectionButton text="1" setNumberOfRooms={handleNumberOfRoomsSelection} />
                    <SelectionButton text="2" setNumberOfRooms={handleNumberOfRoomsSelection} />
                    <SelectionButton text="3" setNumberOfRooms={handleNumberOfRoomsSelection} />
                    <SelectionButton text="4" setNumberOfRooms={handleNumberOfRoomsSelection} />
                </View>
                <View style={styles.row}>
                    <SelectionButton text="4+" setNumberOfRooms={handleNumberOfRoomsSelection} />
                    <View style={styles.doubleButton}>
                        <SelectionButton text="Studio" setNumberOfRooms={handleNumberOfRoomsSelection} />
                    </View>
                    <View style={styles.pass}></View>
                </View>
            </View>
        </View>
    );
};

export default NumberOfRooms;
