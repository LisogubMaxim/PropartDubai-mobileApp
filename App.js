import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  useFonts,
  Nunito_700Bold,
  Nunito_500Medium,
  Nunito_400Regular,
} from '@expo-google-fonts/nunito';
import { OpenSans_600SemiBold } from '@expo-google-fonts/open-sans';

import Registration from './src/components/Registration/Registration';
import SignIn from './src/components/SignIn/SignInComponent/SignIn';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_700Bold,
    Nunito_500Medium,
    Nunito_400Regular,
    OpenSans_600SemiBold,
  });

  return (
    <View style={styles.container}>
      <SignIn />
      {/* <Registration /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
