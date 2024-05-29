import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {
  useFonts,
  Nunito_700Bold,
  Nunito_500Medium,
  Nunito_400Regular,
} from '@expo-google-fonts/nunito';
import { OpenSans_400Regular, OpenSans_600SemiBold } from '@expo-google-fonts/open-sans';

import Registration from './src/components/Registration/Registration';
import SignIn from './src/components/SignIn/SignInComponent/SignIn';
import OTP from './src/components/OTP/OTP';
import Main from './src/components/Main/Main';

import DeveloperProperties from './src/components/Developers/DevProperties/DeveloperProperties';
import ExploreDevelopers from './src/components/Developers/ExploreDevs/ExploreDevelopers';
import Special from './src/components/Special/Special';
import AboutDeveloper from './src/components/Developers/AboutDev/AboutDeveloper';
import OurServices from './src/components/OurServices/OurServices';
import AreaProperties from './src/components/areas/AreaProperties/AreaProperties';
import ProjectProperty from './src/components/ProjectProperty/ProjectProperty';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_700Bold,
    Nunito_500Medium,
    Nunito_400Regular,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
  });

  return (
    <View style={styles.container}>
      {/* <AreaProperties /> */}
      {/* <OurServices /> */}
      {/* <AboutDeveloper /> */}
      {/* <ExploreDevelopers /> */}
      {/* <DeveloperProperties /> */}
      {/* <Main /> */}
      <ProjectProperty />
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Confirmation"
            component={OTP}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Registration"
            component={Registration}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProjectProperty"
            component={ProjectProperty}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: "center",
    // justifyContent: "center",
  },
});
