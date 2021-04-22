import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	TextInput,
	KeyboardAvoidingView,
	Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Button from '../../components/button/Button';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default function UserIdentification() {
	const [isFocused, setIsFocused] = useState(false);
	const [isFilled, setIsFilled] = useState(false);
	const [name, setName] = useState<string>();
	const navigation = useNavigation();

	const handleInputBlur = () => {
		setIsFocused(false);
		setIsFilled(!!name);
	};
	const handleInputFocus = () => {
		setIsFocused(true);
	};

	const handleInputChange = (value: string) => {
		setIsFilled(!!value);
		setName(value);
	};

	const handleSubmit = () => {
		navigation.navigate('Confirmation');
	};
	console.log('name ', name);
	return (
		<SafeAreaView style={styles.container}>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			>
				<View style={styles.content}>
					<View style={styles.form}>
						<View style={styles.header}>
							<Text style={styles.emoji}>{isFilled ? '🙂' : '😉'}</Text>
							<Text style={styles.title}>How can I call you ?</Text>
						</View>
						<TextInput
							style={[styles.input, (isFocused || isFilled) && { borderColor: colors.green }]}
							placeholder='Type your name'
							onFocus={handleInputFocus}
							onBlur={handleInputBlur}
							onChangeText={handleInputChange}
						></TextInput>
						<View style={styles.footer}>
							<Button text='Confirm' onPress={handleSubmit} />
						</View>
					</View>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	content: {
		flex: 1,
		width: '100%',
	},
	form: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 54,
		alignItems: 'center',
		width: '100%',
	},
	footer: {
		marginTop: 40,
		width: '100%',
		paddingHorizontal: 20,
	},
	emoji: {
		fontSize: 44,
	},
	header: {
		//this view wraps two loose texts so avoid brutal scrolling when keyboard appears
		alignItems: 'center',
	},
	input: {
		borderBottomWidth: 1,
		borderColor: colors.gray,
		color: colors.heading,
		width: '100%',
		fontSize: 18,
		marginTop: 50,
		padding: 10,
		textAlign: 'center',
	},
	title: {
		fontSize: 24,
		lineHeight: 32,
		textAlign: 'center',
		color: colors.heading,
		fontFamily: fonts.heading,
		marginTop: 20,
	},
});
