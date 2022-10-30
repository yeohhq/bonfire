import { StyleSheet, Image, SafeAreaView } from 'react-native'
import Guide from '../assets/images/guide.png'

export default function Splash({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<Image source={Guide} style={{ width: 200, height: 200 }} />
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
