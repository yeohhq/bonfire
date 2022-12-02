import { StyleSheet, SafeAreaView, View, Text, Alert } from 'react-native'
import Button from '../components/Buttons/Button'
import InputField from '../components/InputField'
import { useForm } from 'react-hook-form'
import { Auth } from 'aws-amplify'

export default function ForgotPassword({ navigation }) {
	const { control, handleSubmit } = useForm()

	// Handlers
	const handleSend = async (data) => {
		try {
			await Auth.forgotPassword(data.username)
			navigation.navigate('ResetPassword')
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
						You will receive an email associated with this username
						with a reset code to reset your password.
					</Text>
					<InputField
						name="username"
						control={control}
						placeholder="Username"
						rules={{
							required: 'Username is required'
						}}
					/>
					<Button
						title="Send"
						onPress={handleSubmit(handleSend)}
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
