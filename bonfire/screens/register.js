import { StyleSheet, SafeAreaView, View, Text, Alert } from 'react-native'
import Button from '../components/Buttons/Button'
import ButtonWithText from '../components/Buttons/ButtonWithText'
import SocialSignInButton from '../components/Buttons/SocialSignInButton'
import InputField from '../components/InputField'
import Separator from '../components/Separator'
import { useForm } from 'react-hook-form'
import { Auth } from 'aws-amplify'

const EMAIL_REGEX =
	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export default function Register({ navigation }) {
	const { control, handleSubmit, watch } = useForm()
	const pwd = watch('password')

	// Handlers
	const handleRegister = async (data) => {
		const { username, password, email, name } = data
		try {
			await Auth.signUp({
				username,
				password,
				attributes: { email, name, preferred_username: username }
			})

			navigation.navigate('VerifyEmail', { username })
		} catch (e) {
			Alert.alert('Oops', e.message)
		}
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
						name="name"
						control={control}
						placeholder="Name"
						rules={{
							required: 'Name is required',
							minLength: {
								value: 3,
								message:
									'Name should be at least 3 characters long'
							},
							maxLength: {
								value: 24,
								message: 'Name should be max 24 characters long'
							}
						}}
					/>
					<InputField
						name="username"
						control={control}
						placeholder="Username"
						rules={{
							required: 'Username is required',
							minLength: {
								value: 3,
								message:
									'Username should be at least 3 characters long'
							},
							maxLength: {
								value: 24,
								message:
									'Username should be max 24 characters long'
							}
						}}
					/>
					<InputField
						name="email"
						control={control}
						placeholder="Email"
						rules={{
							required: 'Email is required',
							pattern: {
								value: EMAIL_REGEX,
								message: 'Email is invalid'
							}
						}}
					/>
					<InputField
						name="password"
						control={control}
						placeholder="Password"
						secureTextEntry
						rules={{
							required: 'Password is required',
							minLength: {
								value: 8,
								message:
									'Password should be at least 8 characters long'
							}
						}}
					/>
					<InputField
						name="password-repeat"
						control={control}
						placeholder="Confirm Password"
						secureTextEntry
						rules={{
							validate: (value) =>
								value === pwd || 'Passwords do not match'
						}}
					/>
					<Button
						title="Register"
						onPress={handleSubmit(handleRegister)}
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
