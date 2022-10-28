import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins'

export default function Button({ title, onPress, type, fullWidth }) {
	let [fontsLoaded] = useFonts(Poppins_400Regular)

	const variant = type.toUpperCase()
	const marginStyle = fullWidth
		? styles.button_FULLWIDTH
		: styles.button_NORMALWIDTH
	const containerStyle = fullWidth
		? styles.buttonContainer_FULLWIDTH
		: styles.buttonContainer_NORMALWIDTH

	return (
		<View style={containerStyle}>
			<TouchableOpacity onPress={onPress}>
				<View
					style={[
						styles.button_DEFAULT,
						styles[`button_${variant}`],
						marginStyle
					]}
				>
					<Text
						style={[
							styles.buttonText_DEFAULT,
							styles[`buttonText_${variant}`]
						]}
					>
						{title}
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	buttonContainer_NORMALWIDTH: {
		flex: 1 // Allow button to fill full width available
	},
	buttonContainer_FULLWIDTH: {},
	button_FULLWIDTH: {
		margin: undefined
	},
	button_NORMALWIDTH: {
		margin: 8,
		alignSelf: 'stretch' // Allow button to fill full width available
	},
	button_DEFAULT: {
		borderRadius: 8,
		paddingVertical: 12,
		paddingHorizontal: 12,
		marginVertical: 4,
		height: 48
	},
	button_PRIMARY: {
		backgroundColor: '#007AFF'
	},
	button_SECONDARY: {
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderColor: '#007AFF'
	},
	buttonText_DEFAULT: {
		fontFamily: 'Poppins_600SemiBold',
		fontSize: 14,
		textAlign: 'center'
	},
	buttonText_PRIMARY: {
		color: 'white'
	},
	buttonText_SECONDARY: {
		color: '#007AFF'
	}
})

const secondaryStyles = StyleSheet.create({
	buttonContainer: {
		flex: 1 // Allow button to fill full width available
	},
	button: {
		borderRadius: 8,
		paddingVertical: 12,
		paddingHorizontal: 12,
		marginVertical: 4,
		height: 48,
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderColor: '#007AFF',
		margin: 8,
		alignSelf: 'stretch' // Allow button to fill full width available
	},
	buttonText: {
		fontFamily: 'Poppins_600SemiBold',
		fontSize: 14,
		color: '#007AFF',
		textAlign: 'center'
	}
})
