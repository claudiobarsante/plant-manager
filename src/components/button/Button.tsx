import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface Props extends TouchableOpacityProps {
	text: string;
}
export default function Button({ text, ...rest }: Props) {
	return (
		<TouchableOpacity style={styles.container} {...rest}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.green,
		height: 56,
		borderRadius: 16,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 16,
		color: colors.white,
		fontFamily: fonts.heading,
	},
});
