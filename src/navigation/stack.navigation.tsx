import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';
import Welcome from '../screens/welcome/Welcome';
import UserIdentification from '../screens/user-identification/UserIdentification';
import Confirmattion from '../screens/confirmation/Confirmation';

const MainStackNavigator = createStackNavigator();

export const StackNavigation = () => (
	<MainStackNavigator.Navigator
		headerMode='none'
		screenOptions={{
			cardStyle: {
				backgroundColor: colors.white,
			},
		}}
	>
		<MainStackNavigator.Screen name='Welcome' component={Welcome} />
		<MainStackNavigator.Screen name='UserIdentification' component={UserIdentification} />
		<MainStackNavigator.Screen name='Confirmation' component={Confirmattion} />
	</MainStackNavigator.Navigator>
);
