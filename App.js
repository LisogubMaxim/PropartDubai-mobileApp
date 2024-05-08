import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

import Registration from "./src/components/Registration/Registration";

export default function App() {
    const [fontsLoaded] = useFonts({
        "Nunito-Bold": require("./assets/fonts/Nunito/Nunito-Bold.ttf"),
        "Nunito-Medium": require("./assets/fonts/Nunito/Nunito-Medium.ttf"),
        "Nunito-Regular": require("./assets/fonts/Nunito/Nunito-Regular.ttf"),
        "OpenSans-SemiBold": require("./assets/fonts/OpenSans/OpenSans-SemiBold.ttf"),
    });

    return (
        <View>
            <Registration />
            <StatusBar style="auto" />
        </View>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",
//     },
// });
