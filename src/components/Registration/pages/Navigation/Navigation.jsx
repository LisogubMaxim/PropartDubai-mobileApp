import { Text, View } from "react-native";
import Button from "../../../ui/Button/Button";

import styles from "./navigationStyles";

const Navigation = ({ handleNextClick, handleSkipClick }) => {
    return (
        <View style={styles.container}>
            <View style={styles.nextButton}>
                <Button backgroundColor="#333863" text="Next" onPress={handleNextClick} />
            </View>
            <View style={styles.skip}>
                <Text style={styles.skipButton} onPress={handleSkipClick}>
                    Skip
                </Text>
            </View>
        </View>
    );
};

export default Navigation;
