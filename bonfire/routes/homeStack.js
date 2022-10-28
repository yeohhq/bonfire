import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { Button } from 'react-native'
import Home from '../screens/home'
import SignIn from '../screens/signin'
import SignUp from '../screens/signup'
import Profile from '../screens/profile'
import Community from '../screens/community'
import { MaterialIcons } from 'react-native-vector-icons'

const customHeader = {
	headerTransparent: true,
	headerBackTitleVisible: false,
	headerTitle: null,
	headerBackImage: () => (
		<MaterialIcons
			style={{ paddingLeft: 12 }}
			name="arrow-back"
			size={24}
			color="black"
		/>
	)
}

const screens = {
	Home: {
		// default screen
		screen: Home,
		navigationOptions: {
			headerShown: false // hide header
		}
	},
	SignIn: {
		screen: SignIn,
		navigationOptions: {
			title: 'Sign Up',
			...customHeader
		}
	},
	SignUp: {
		screen: SignUp,
		navigationOptions: {
			title: 'Sign Up',
			...customHeader
		}
	},
	Community: {
		screen: Community,
		navigationOptions: customHeader
	},
	Profile: {
		screen: Profile,
		navigationOptions: customHeader
	}
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)
