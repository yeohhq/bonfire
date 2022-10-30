import { StyleSheet, Text, SafeAreaView, View } from 'react-native'

export default function HomeAuthenticated({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.dockToBottom}>
				<Text style={styles.title}>Home</Text>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		fontFamily: 'Poppins_600SemiBold',
		fontSize: 40,
		marginBottom: 40
	},
	row: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
	},
	dockToBottom: {
		position: 'absolute',
		bottom: 48,
		paddingHorizontal: 12
	},
	backgroundImage: {
		height: 'auto',
		width: '100%',
		aspectRatio: 1,
		zIndex: 1,
		position: 'absolute',
		top: 0
	}
})
