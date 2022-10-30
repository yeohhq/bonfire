import { useState } from 'react'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'
import Button from '../components/Buttons/Button'
import ButtonWithText from '../components/Buttons/ButtonWithText'
import SocialSignInButton from '../components/Buttons/SocialSignInButton'
import InputField from '../components/InputField'
import Separator from '../components/Separator'

export default function Register({ navigation }) {
	// States
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	// Handlers
	const handleRegister = () => {
		navigation.navigate('VerifyEmail')
	}

	const onPressTermsOfUse = () => {
		navigation.navigate('TermsOfUse')
	}

	const onPressPrivacyPolicy = () => {
		navigation.navigate('PrivacyPolicy')
	}

	const handleLogin = () => {
		navigation.navigate('Login')
	}

	return (
		<SafeAreaView style={styles.root}>
			<View style={styles.container}>
				<View>
					<InputField
						placeholder={'Username'}
						value={username}
						setValue={setUsername}
					/>
					<InputField
						placeholder={'Email'}
						value={email}
						setValue={setEmail}
					/>
					<InputField
						placeholder={'Password'}
						value={password}
						setValue={setPassword}
						secureTextEntry={true} // Prevent seeing password
					/>
					<InputField
						placeholder={'Confirm Password'}
						value={confirmPassword}
						setValue={setConfirmPassword}
						secureTextEntry={true} // Prevent seeing password
					/>
					<Button
						title="Register"
						onPress={handleRegister}
						fullWidth
					/>
					<Text style={styles.text}>
						By registering, you confirm that you accept our{' '}
						<Text style={styles.link} onPress={onPressTermsOfUse}>
							Terms of Use
						</Text>{' '}
						and{' '}
						<Text
							style={styles.link}
							onPress={onPressPrivacyPolicy}
						>
							Privacy Policy
						</Text>
					</Text>
					<Separator text="or" />
					<View style={styles.dockToBottom}>
						<SocialSignInButton />
						<ButtonWithText
							text="Have an account?"
							title="Login"
							onPress={handleLogin}
							fullWidth
						/>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: 'center',
		marginHorizontal: 40
	},
	container: {
		width: '100%',
		marginTop: 60
	},
	logo: {
		width: '50%',
		maxWidth: 200,
		maxHeight: 200
	},
	text: {
		color: 'gray',
		marginVertical: 12
	},
	link: {
		color: '#007AFF'
	},
	dockToBottom: {
		width: '100%'
	}
})
