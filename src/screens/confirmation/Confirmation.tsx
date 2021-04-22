import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Button from '../../components/button/Button';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default function Confirmattion() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.emoji}>😀</Text>
				<Text style={styles.title}>All done !</Text>
				<Text style={styles.subtitle}>Let's start taking care of your plants</Text>
				<View style={styles.footer}>
					<Button text='Start' />
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		padding: 30,
	},
	title: {
		fontSize: 32,
		fontFamily: fonts.heading,
		textAlign: 'center',
		color: colors.heading,
		lineHeight: 38,
		marginTop: 15,
	},
	subtitle: {
		fontFamily: fonts.text,
		textAlign: 'center',
		fontSize: 17,
		paddingVertical: 20,
		color: colors.heading,
	},
	emoji: {
		fontSize: 78,
	},
	footer: {
		width: '100%',
		paddingHorizontal: 50,
		marginTop: 20,
	},
});
