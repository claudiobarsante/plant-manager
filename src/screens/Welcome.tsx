import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
import wateringImg from '../assets/watering.png';
import colors from '../colors';
export default function Welcome() {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Manage {'\n'}your plants easily</Text>
			<Image source={wateringImg} style={styles.image} resizeMode='contain' />

			<Text style={styles.subtitle}>
				Don't forget to water your plants anymore. We take care to remind you whenever you need
			</Text>
			<TouchableOpacity style={styles.button} activeOpacity={0.7}>
				<Text style={styles.buttonText}>></Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
	},
    image:{        
        height:Dimensions.get('window').width*0.7
    },
	button: {
		backgroundColor: colors.green,
		justifyContent: 'center',
		alignItems: 'center',
        borderRadius:16,
        marginBottom:10,
        height:56,
        width:56
	},
    buttonText:{
        color:colors.white,
        fontSize: 24

    },
	title: {
		fontSize: 32,
		fontWeight: 'bold',
		textAlign: 'center',
		color: colors.heading,
		marginTop: 38,
	},
	subtitle: {
		textAlign: 'center',
		fontSize: 18,
		paddingHorizontal: 20,
		color: colors.heading,
	},
});
