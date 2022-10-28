import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Image, SafeAreaView } from 'react-native'

export default function Splash({ navigation }) {
	const pressHandler = () => {
		navigation.navigate('Home')
	}

	return (
		<SafeAreaView style={styles.container}>
			<Image
				source={require('../assets/icon.png')}
				style={{ width: 200, height: 200 }}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
