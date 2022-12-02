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
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports.js'
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

export default App
