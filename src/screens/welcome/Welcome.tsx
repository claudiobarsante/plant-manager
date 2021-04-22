import React from 'react';
import {
	SafeAreaView,
	View,
	Text,
	Image,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import wateringImg from '../../assets/watering.png';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
export default function Welcome() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.wrapper}>
				<Text style={styles.title}>Manage {'\n'}your plants easily</Text>
				<Image source={wateringImg} style={styles.image} resizeMode='contain' />

				<Text style={styles.subtitle}>
					Don't forget to water your plants anymore. We take care to remind you whenever you need
				</Text>
				<TouchableOpacity style={styles.button} activeOpacity={0.7}>
					<Text>
						<Feather name='chevron-right' style={styles.buttonIcon} />
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	wrapper: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingHorizontal: 20,
	},
	image: {
		height: Dimensions.get('window').width * 0.7,
	},
	button: {
		backgroundColor: colors.green,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 16,
		marginBottom: 10,
		height: 56,
		width: 56,
	},
	buttonIcon: {
		color: colors.white,
		fontSize: 32,
	},
	title: {
		fontSize: Dimensions.get('window').width > 375 ? 28 : 20,
		fontWeight: 'bold',
		textAlign: 'center',
		color: colors.heading,
		marginTop: 38,
		fontFamily: fonts.heading,
		lineHeight: 34,
	},
	subtitle: {
		textAlign: 'center',
		fontSize: Dimensions.get('window').width > 375 ? 18 : 14,
		paddingHorizontal: 20,
		color: colors.heading,
		fontFamily: fonts.text,
	},
});
