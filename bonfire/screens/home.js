import CustomStatusBar from '../components/CustomStatusBar'
import {
	StyleSheet,
	Text,
	SafeAreaView,
	View,
	ImageBackground
} from 'react-native'
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
import { StatusBar } from 'expo-status-bar'
import Splash from './splash'
import Button from '../components/Button'

export default function Home({ navigation }) {
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

	const signInHandler = () => {
		navigation.navigate('SignIn')
	}

	const signUpHandler = () => {
		navigation.navigate('SignUp')
	}

	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground
				source={require('../assets/graphic.png')}
				style={styles.backgroundImage}
			/>

			<View style={styles.dockToBottom}>
				<Text style={styles.title}>
					Let's create memories without hassle.
				</Text>
				<View>
					<View style={styles.row}>
						<Button
							title="Sign Up"
							onPress={signUpHandler}
							type="secondary"
						/>
						<Button
							title="Sign In"
							onPress={signInHandler}
							type="primary"
						/>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		fontFamily: 'Poppins_600SemiBold',
		fontSize: 40,
		marginBottom: 40
	},
	row: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
	},
	dockToBottom: {
		position: 'absolute',
		bottom: 48,
		paddingHorizontal: 12
	},
	backgroundImage: {
		height: 'auto',
		width: '100%',
		aspectRatio: 1,
		zIndex: 1,
		position: 'absolute',
		top: 0
	}
})
