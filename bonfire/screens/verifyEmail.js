import { useState } from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import Button from '../components/Buttons/Button'
import InputField from '../components/InputField'

export default function VerifyEmail({ navigation }) {
	// States
	const [verificationCode, setVerificationCode] = useState('')

	// Handlers
	const handleVerify = () => {
		console.warn('verify')
	}

	const handleLogin = () => {
		navigation.navigate('Login')
	}

	const handleResendCode = () => {
		console.warn('resending code')
	}

	return (
		<SafeAreaView style={styles.root}>
			<View style={styles.container}>
				<View>
					<InputField
						placeholder={'Enter your verification code'}
						value={verificationCode}
						setValue={setVerificationCode}
					/>
					<Button title="Verify" onPress={handleVerify} fullWidth />
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
