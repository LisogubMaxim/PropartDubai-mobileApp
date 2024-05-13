import { Text, View } from "react-native";

import PriceRange from "../../../ui/PriceRange/PriceRange";

import styles from "./priceStyles";

const Price = ({ onChange }) => {
    return (
        <View style={styles.clientPriceRange}>
            <Text style={styles.title}>What is your price range?</Text>
            <Text style={styles.text}>Price range</Text>
            <PriceRange onChange={onChange} />
        </View>
    );
};

export default Price;
