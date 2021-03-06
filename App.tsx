import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import Welcome from './src/screens/welcome/Welcome';
import UserIdentification from './src/screens/user-identification/UserIdentification';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
import Confirmation from './src/screens/confirmation/Confirmation';
import Navigation from './src/navigation/index';

export default function App() {
	const [fontsLoaded] = useFonts({
		Jost_400Regular,
		Jost_600SemiBold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<>
			<StatusBar />
			<Navigation />
		</>
	);
}
