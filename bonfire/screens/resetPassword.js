import { useState } from 'react'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'
import Button from '../components/Buttons/Button'
import SocialSignInButton from '../components/Buttons/SocialSignInButton'
import InputField from '../components/InputField'
import Separator from '../components/Separator'

export default function ResetPassword({ navigation }) {
	// States
	const [code, setCode] = useState('')
	const [newPassword, setNewPassword] = useState('')
	const [confirmNewPassword, setConfirmNewPassword] = useState('')

	// Handlers
	const handleChangePassword = () => {
		console.warn('changed pw')
	}

	const handleLogin = () => {
		navigation.navigate('Login')
	}

	return (
		<SafeAreaView style={styles.root}>
			<View style={styles.container}>
				<View>
					<InputField
						placeholder={'Enter your password reset code'}
						value={code}
						setValue={setCode}
					/>
					<InputField
						placeholder={'New Password'}
						value={newPassword}
						setValue={setNewPassword}
					/>
					<InputField
						placeholder={'Confirm New Password'}
						value={confirmNewPassword}
						setValue={setConfirmNewPassword}
					/>
					<Button
						title="Change password"
						onPress={handleChangePassword}
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
