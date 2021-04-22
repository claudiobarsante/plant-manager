import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './stack.navigation';

const Navigation = () => (
	<NavigationContainer>
		<StackNavigation />
	</NavigationContainer>
);

export default Navigation;
