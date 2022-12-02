import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
	StyleSheet,
	SafeAreaView,
	View,
	Image,
	useWindowDimensions,
	ScrollView,
	Alert
} from 'react-native'
import Img from '../assets/images/guide.png'
import Button from '../components/Buttons/Button'
import ButtonWithText from '../components/Buttons/ButtonWithText'
import SocialSignInButton from '../components/Buttons/SocialSignInButton'
import InputField from '../components/InputField'
import Separator from '../components/Separator'
import { Auth } from 'aws-amplify'

export default function Login({ navigation }) {
	// States
	const [loading, setLoading] = useState(false)
	const { height } = useWindowDimensions()

	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm()

	// Handlers
	const handleLogin = async (data) => {
		if (loading) {
			return
		}

		setLoading(true)
		try {
			const response = await Auth.signIn(data.username, data.password)
			console.log(response)
		} catch (e) {
			Alert.alert('Oops', e.message)
		}
		setLoading(false)
	}

	const handleForgotPassword = () => {
		navigation.navigate('ForgotPassword')
	}

	const handleRegister = () => {
		navigation.navigate('Register')
	}

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.container}>
				<Image
					source={Img}
					style={[styles.logo, { height: height * 0.3 }]}
					resizeMode="contain"
				/>
				<View style={styles.form}>
					<InputField
						name="username"
						placeholder={'Username'}
						control={control}
						rules={{ required: 'Username is required' }}
					/>
					<InputField
						name="password"
						placeholder={'Password'}
						secureTextEntry={true} // Prevent seeing password
						control={control}
						rules={{
							required: 'Password is required',
							minLength: {
								value: 3,
								message:
									'Password should be minimum 8 characters long'
							}
						}}
					/>
					<Button
						title={loading ? 'Loading...' : 'Login'}
						onPress={handleSubmit(handleLogin)}
						fullWidth
					/>
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
			</View>
		</ScrollView>
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
