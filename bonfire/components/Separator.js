import { StyleSheet, View, Text } from 'react-native'

export default function Separator({ text }) {
	return text ? (
		<View style={styles.container}>
			<View style={styles.line}></View>
			<Text style={styles.text}>{text}</Text>
			<View style={styles.line}></View>
		</View>
	) : (
		<View style={styles.container}>
			<View style={styles.line}></View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		margin: 16,
		alignItems: 'center',
		flexDirection: 'row'
	},
	text: {
		fontFamily: 'Poppins_300Light',
		letterSpacing: 2,
		fontSize: 14,
		textTransform: 'uppercase',
		color: '#5E6272'
	},
	line: {
		borderWidth: 0.5,
		flex: 1,
		marginHorizontal: 12,
		borderColor: '#c4c4c4'
	}
})
