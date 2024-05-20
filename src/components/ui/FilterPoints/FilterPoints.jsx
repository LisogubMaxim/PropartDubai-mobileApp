import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import Point from "./Point/Point";

import styles from "./filterPointsStyles";

const FilterPoints = ({ points, onPressDelete, onPressClearAll }) => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }}>
            <View style={styles.container}>
                {points.map((item, index) => (
                    <View key={index}>
                        <Point text={item} onPressDelete={onPressDelete} />
                    </View>
                ))}
                <TouchableOpacity style={styles.point} onPress={onPressClearAll}>
                    <Text style={styles.text}>Clear all</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default FilterPoints;

// const [filterPoints, setFilterPoints] = useState(specialData.filterPoints);

// const handleClearPoint = (point) => {
//     setFilterPoints(filterPoints.filter((item) => item !== point));
// };

// const handleClearAll = (point) => {
//     setFilterPoints(null);
// };
