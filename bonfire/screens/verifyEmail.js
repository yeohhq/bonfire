import { useState } from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import Button from '../components/Buttons/Button'
import InputField from '../components/InputField'
import { useForm } from 'react-hook-form'
import { useRoute } from '@react-navigation/native'
import { Auth } from 'aws-amplify'

export default function VerifyEmail({ navigation }) {
	const route = useRoute()
	const { control, handleSubmit, watch } = useForm({
		defaultValues: { username: route?.params?.username }
	})

	const username = watch('username')

	// Handlers
	const handleVerify = async (data) => {
		try {
			await Auth.confirmSignUp(data.username, data.code)
			navigation.navigate('Login')
		} catch (e) {
			Alert.alert('Oops', e.message)
		}
	}

	const handleLogin = () => {
		navigation.navigate('Login')
	}

	const handleResendCode = async (data) => {
		try {
			await Auth.resendSignUp(data.username)
			Alert.alert('Success', 'Code was resent to your email')
		} catch (e) {
			Alert.alert('Oops', e.message)
		}
	}

	return (
		<SafeAreaView style={styles.root}>
			<View style={styles.container}>
				<View>
					<InputField
						name="username"
						control={control}
						placeholder="Username"
						rules={{
							required: 'Username code is required'
						}}
					/>
					<InputField
						name="code"
						control={control}
						placeholder="Enter your confirmation code"
						rules={{
							required: 'Confirmation code is required'
						}}
					/>
					<Button
						title="Verify"
						onPress={handleSubmit(handleVerify)}
						fullWidth
					/>
					<Button
						title="Resend code"
						onPress={handleResendCode}
						type="secondary"
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
