import { useContext, useState } from 'react'
import {
	StyleSheet,
	SafeAreaView,
	View,
	Image,
	useWindowDimensions,
	ScrollView
} from 'react-native'
import Img from '../assets/images/guide.png'
import Button from '../components/Buttons/Button'
import ButtonWithText from '../components/Buttons/ButtonWithText'
import SocialSignInButton from '../components/Buttons/SocialSignInButton'
import InputField from '../components/InputField'
import Separator from '../components/Separator'

export default function Login({ navigation }) {
	// States
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const { height } = useWindowDimensions()

	// Handlers
	const handleLogin = () => {}

	const handleForgotPassword = () => {
		navigation.navigate('ForgotPassword')
	}

	const handleRegister = () => {
		navigation.navigate('Register')
	}

	return (
		<SafeAreaView style={styles.container}>
			<Image
				source={Img}
				style={[styles.logo, { height: height * 0.3 }]}
				resizeMode="contain"
			/>
			<View style={styles.form}>
				<InputField
					icon="alternate-email"
					placeholder={'Username'}
					value={username}
					setValue={setUsername}
				/>
				<InputField
					icon="alternate-email"
					placeholder={'Password'}
					value={password}
					setValue={setPassword}
					secureTextEntry={true} // Prevent seeing password
				/>
				<Button title="Login" onPress={handleLogin} fullWidth />
				<Button
					title="Forgot password?"
					onPress={handleForgotPassword}
					type="tertiary"
					fullWidth
				/>
				<Separator text="or" />
				<SocialSignInButton />
				<ButtonWithText
					text="Don't have an account?"
					title="Register"
					onPress={handleRegister}
					type="tertiary"
					fullWidth
				/>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		marginTop: 80,
		marginHorizontal: 40
	},
	logo: {
		width: '50%',
		maxWidth: 200,
		maxHeight: 200
	},
	form: {
		width: '100%'
	}
})
