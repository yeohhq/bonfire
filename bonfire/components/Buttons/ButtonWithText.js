import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function ButtonWithText({
	text,
	title,
	onPress,
	disabled = false,
	buttonColor = 'transparent',
	buttonTextColor = '#5E6272',
	helperTextColor = '#5E6272'
}) {
	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={[styles.helpText, { color: helperTextColor }]}>
					{text}
				</Text>
			</View>
			<TouchableOpacity onPress={onPress} disabled={disabled}>
				<View style={[styles.button, { backgroundColor: buttonColor }]}>
					<Text style={[styles.text, { color: buttonTextColor }]}>
						{title}
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignContent: 'space-between',
		marginVertical: 5,
		marginHorizontal: 8
	},
	button: {
		paddingVertical: 12,
		paddingHorizontal: 12,
		height: 48,
		minWidth: 100,
		width: '100%'
	},
	textContainer: {
		alignContent: 'center',
		justifyContent: 'center',
		marginRight: 4,
		flex: 1
	},
	helpText: {
		fontFamily: 'Poppins_300Light',
		fontSize: 14,
		textAlign: 'center'
	},
	text: {
		fontFamily: 'Poppins_600SemiBold',
		fontSize: 14,
		textAlign: 'center'
	}
})
