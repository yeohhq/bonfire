import Splash from './screens/splash'
import AppNav from './navigation/AppNav'

import {
	useFonts,
	Poppins_100Thin,
	Poppins_100Thin_Italic,
	Poppins_200ExtraLight,
	Poppins_200ExtraLight_Italic,
	Poppins_300Light,
	Poppins_300Light_Italic,
	Poppins_400Regular,
	Poppins_400Regular_Italic,
	Poppins_500Medium,
	Poppins_500Medium_Italic,
	Poppins_600SemiBold,
	Poppins_600SemiBold_Italic
} from '@expo-google-fonts/poppins'

// Configure AWS Amplify
import { Amplify, Auth } from 'aws-amplify'
import awsconfig from './src/aws-exports.js'
import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react-native'
Amplify.configure(awsconfig)

const App = () => {
	let [fontsLoaded] = useFonts({
		Poppins_100Thin,
		Poppins_100Thin_Italic,
		Poppins_200ExtraLight,
		Poppins_200ExtraLight_Italic,
		Poppins_300Light,
		Poppins_300Light_Italic,
		Poppins_400Regular,
		Poppins_400Regular_Italic,
		Poppins_500Medium,
		Poppins_500Medium_Italic,
		Poppins_600SemiBold,
		Poppins_600SemiBold_Italic
	})

	if (!fontsLoaded) {
		return <Splash />
	}

	return <AppNav />
}

const signUpConfig = {
	header: 'Create an Account',
	hideAllDefaults: true,
	signUpFields: [
		{
			label: 'Full name',
			key: 'name',
			required: true,
			displayOrder: 1,
			type: 'string'
		},
		{
			label: 'Email',
			key: 'email',
			required: true,
			displayOrder: 2,
			type: 'string'
		},
		{
			label: 'Username',
			key: 'preferred_username',
			required: true,
			displayOrder: 3,
			type: 'string'
		},
		{
			label: 'Password',
			key: 'password',
			required: true,
			displayOrder: 4,
			type: 'password'
		}
	]
}

const customTheme = {
	...AmplifyTheme,
	button: {
		...AmplifyTheme.button,
		backgroundColor: '#221d1e'
	},
	buttonDisabled: {
		...AmplifyTheme.buttonDisabled,
		backgroundColor: '#b4b4b4'
	},
	sectionFooterLink: {
		...AmplifyTheme.sectionFooterLink,
		color: '#221d1e'
	},
	sectionFooterLinkDisabled: {
		...AmplifyTheme.sectionFooterLink,
		color: '#b4b4b4'
	}
}

export default withAuthenticator(App, { signUpConfig, theme: customTheme })
