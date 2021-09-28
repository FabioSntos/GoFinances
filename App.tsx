import "react-native-gesture-handler";
import React from "react";

import AppLoading from "expo-app-loading";

import { ThemeProvider } from "styled-components/native";

import { NavigationContainer } from "@react-navigation/native";

import {
	useFonts,
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import theme from "./src/global/styles/theme";

import { StatusBar } from "react-native";

import { AppRoutes } from "./src/routes/app.routes";

export default function App() {
	const [fonstLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_500Medium,
		Poppins_700Bold,
	});

	if (!fonstLoaded) {
		return <AppLoading />;
	}
	return (
		<ThemeProvider theme={theme}>
			<StatusBar
				barStyle="light-content"
				backgroundColor={theme.colors.primary}
			/>
			<NavigationContainer>
				<AppRoutes />
			</NavigationContainer>
		</ThemeProvider>
	);
}
