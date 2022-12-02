import { useState } from 'react'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'
import Button from '../components/Buttons/Button'
import InputField from '../components/InputField'
import { useForm } from 'react-hook-form'
import { Auth } from 'aws-amplify'

export default function ResetPassword({ navigation }) {
	// States
	const { control, handleSubmit } = useForm()

	// Handlers
	const handleChangePassword = async (data) => {
		try {
			await Auth.forgotPasswordSubmit(
				data.username,
				data.code,
				data.password
			)
			navigation.navigate('Login')
		} catch (e) {
			Alert.alert('Oops', e.message)
		}
	}

	const handleLogin = () => {
		navigation.navigate('Login')
	}

	return (
		<SafeAreaView style={styles.root}>
			<View style={styles.container}>
				<View>
					<Text style={styles.text}>
						Please check your email associated with your username
						for the password reset code.
					</Text>
					<InputField
						placeholder="Username"
						name="username"
						control={control}
						rules={{ required: 'Username is required' }}
					/>
					<InputField
						placeholder="Code"
						name="code"
						control={control}
						rules={{ required: 'Code is required' }}
					/>
					<InputField
						placeholder="Enter your new password"
						name="password"
						control={control}
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
					<Button
						title="Change password"
						onPress={handleSubmit(handleChangePassword)}
						fullWidth
					/>

					<Button
						title="Back to Login"
						onPress={handleLogin}
						type="tertiary"
						fullWidth
					/>
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
	row: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
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
