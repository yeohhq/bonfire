import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native'
import Button from '../components/Buttons/Button'
import Img from '../assets/images/traveler.png'

export default function UnauthenticatedHome({ navigation }) {
	const handleLogin = () => {
		navigation.navigate('Login')
	}

	const handleRegister = () => {
		navigation.navigate('Register')
	}

	return (
		<SafeAreaView style={styles.container}>
			<Image source={Img} style={styles.backgroundImage} />

			<View style={styles.dockToBottom}>
				<Text style={styles.title}>
					Let's create memories without hassle.
				</Text>
				<View>
					<View style={styles.row}>
						<Button
							title="Register"
							onPress={handleRegister}
							type="secondary"
						/>
						<Button title="Login" onPress={handleLogin} />
					</View>
				</View>
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
		bottom: '10%',
		paddingHorizontal: 12
	},
	backgroundImage: {
		height: 'auto',
		width: '60%',
		aspectRatio: 1,
		zIndex: 1,
		position: 'absolute',
		top: '20%',
		margin: 20
	}
})
