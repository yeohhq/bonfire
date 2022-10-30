import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Button({
	title,
	onPress,
	type = 'primary',
	disabled = false,
	fullWidth,
	bgColor,
	fgColor
}) {
	const variant = type.toUpperCase()
	const marginStyle = fullWidth
		? styles.button_FULLWIDTH
		: styles.button_NORMALWIDTH
	const containerStyle = fullWidth
		? styles.buttonContainer_FULLWIDTH
		: styles.buttonContainer_NORMALWIDTH

	return (
		<View style={containerStyle}>
			<TouchableOpacity onPress={onPress} disabled={disabled}>
				<View
					style={[
						styles.button_DEFAULT,
						styles[`button_${variant}`],
						marginStyle,
						bgColor ? { backgroundColor: bgColor } : {}
					]}
				>
					<Text
						style={[
							styles.buttonText_DEFAULT,
							styles[`buttonText_${variant}`],
							fgColor ? { color: fgColor } : {}
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
		borderRadius: 5,
		paddingVertical: 12,
		paddingHorizontal: 12,
		marginVertical: 5,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: 48
	},
	button_PRIMARY: {
		backgroundColor: '#221d1e'
	},
	button_SECONDARY: {
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderColor: '#221d1e'
	},
	button_TERTIARY: {
		backgroundColor: 'transparent'
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
		color: '#221d1e'
	},
	buttonText_TERTIARY: {
		color: '#5E6272'
	}
})
