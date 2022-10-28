import { useState } from 'react'
import {
	StyleSheet,
	SafeAreaView,
	View,
	Image,
	useWindowDimensions
} from 'react-native'
import Logo from '../assets/icon.png'
import Button from '../components/Button'
import InputField from '../components/InputField'

export default function SignIn() {
	// States
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const { height } = useWindowDimensions()

	// Handlers
	const handleLogin = () => {
		console.warn('login pressed')
	}

	const handleForgotPassword = () => {
		console.warn('forgot password pressed')
	}

	return (
		<SafeAreaView style={styles.container}>
			<Image
				source={Logo}
				style={[styles.logo, { height: height * 0.3 }]}
				resizeMode="contain"
			/>
			<View style={styles.form}>
				<InputField
					placeholder={'Username'}
					value={username}
					setValue={setUsername}
				/>
				<InputField
					placeholder={'Password'}
					value={password}
					setValue={setPassword}
					secureTextEntry={true} // Prevent seeing password
				/>
				<Button
					title="Login"
					onPress={handleLogin}
					type="primary"
					fullWidth
				/>
				<Button
					title="Forgot password?"
					onPress={handleForgotPassword}
					type="secondary"
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
	},
	loginButton: {
		backgroundColor: '#007AFF'
	}
})
