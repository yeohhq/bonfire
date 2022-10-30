import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeUnauthenticated from '../screens/homeUnauthenticated'
import Login from '../screens/login'
import Register from '../screens/register'
import VerifyEmail from '../screens/verifyEmail'
import ResetPassword from '../screens/resetPassword'
import ForgotPassword from '../screens/forgotPassword'

const Stack = createNativeStackNavigator()

export default function AuthStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerTransparent: true,
				headerBackTitleVisible: false
			}}
		>
			<Stack.Screen
				name="HomeUnauthenticated"
				component={HomeUnauthenticated}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Login"
				component={Login}
				options={{ title: '' }}
			/>
			<Stack.Screen
				name="Register"
				component={Register}
				options={{ title: 'Create an Account' }}
			/>
			<Stack.Screen
				name="VerifyEmail"
				component={VerifyEmail}
				options={{ title: 'Verify your Email' }}
			/>
			<Stack.Screen
				name="ForgotPassword"
				component={ForgotPassword}
				options={{ title: 'Request Password Reset' }}
			/>
			<Stack.Screen
				name="ResetPassword"
				component={ResetPassword}
				options={{ title: 'Set new Password' }}
			/>
			{/* <Stack.Screen
				name="TermsOfUse"
				component={TermsOfUse}
				options={{title: 'Terms of Use'}}
			/>
			<Stack.Screen
				name="Profile"
				component={TermsOfUse}
				options={{title: 'Privacy Policy'}}
			/> */}
		</Stack.Navigator>
	)
}
