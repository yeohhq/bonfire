import { useState } from 'react'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'
import Button from '../components/Buttons/Button'
import InputField from '../components/InputField'

export default function ForgotPassword({ navigation }) {
	// States
	const [username, setUsername] = useState('')

	// Handlers
	const handleSend = () => {
		console.warn('send')
	}

	const handleEnterResetCode = () => {
		navigation.navigate('ResetPassword')
	}

	return (
		<SafeAreaView style={styles.root}>
			<View style={styles.container}>
				<View>
					<Text style={styles.text}>
						You will receive an email associated with this username
						containing a password reset code.
					</Text>
					<InputField
						placeholder={'Username'}
						value={username}
						setValue={setUsername}
					/>
					<Button title="Send code" onPress={handleSend} fullWidth />

					<Button
						title="Proceed with Reset Code"
						onPress={handleEnterResetCode}
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
