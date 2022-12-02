import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MaterialIcons } from 'react-native-vector-icons'
import { Auth, Hub } from 'aws-amplify'
import { useEffect, useState } from 'react'
import { Alert } from 'react-native'

// Screens - No Auth
import HomeUnauthenticated from '../screens/homeUnauthenticated'
import Login from '../screens/login'
import Register from '../screens/register'
import VerifyEmail from '../screens/verifyEmail'
import ResetPassword from '../screens/resetPassword'
import ForgotPassword from '../screens/forgotPassword'
import Splash from '../screens/splash'

// Screens - Auth
import HomeAuthenticated from '../screens/homeAuthenticated'
import Profile from '../screens/profile'
import Community from '../screens/community'

const Stack = createNativeStackNavigator()

{
	/* <MaterialIcons
						style={{ paddingLeft: 36 }}
						name="arrow-back"
						size={24}
						color="black"
					/> */
}

export default function AppStack() {
	const [user, setUser] = useState(undefined) // User yet to authenticate

	const checkUser = async () => {
		try {
			const authUser = await Auth.currentAuthenticatedUser({
				bypassCache: true
			})
			setUser(authUser)
		} catch (e) {
			setUser(null) // User failed to authenticate
		}
	}

	// Check user authenticated
	useEffect(() => {
		checkUser()
	}, [])

	useEffect(() => {
		const listener = (data) => {
			if (
				data.payload.event === 'signIn' ||
				data.payload.event === 'signOut'
			) {
				checkUser() // Update render if authentication status changes
			}
		}
		// Add listener for auth events on 'auth' channel
		Hub.listen('auth', listener)

		// Remove listener to prevent memory leaks
		return () => Hub.remove('auth', listener)
	}, [])

	if (user === undefined) {
		return <Splash />
	}

	const logout = () => {
		Auth.signOut()
	}

	return (
		<Stack.Navigator
			screenOptions={{
				headerTransparent: true,
				headerBackTitleVisible: false
			}}
		>
			{user ? (
				<>
					<Stack.Screen
						name="Home"
						component={HomeAuthenticated}
						options={{
							headerRight: () => (
								<MaterialIcons
									style={{ paddingRight: 0 }}
									name="logout"
									size={24}
									color="black"
									onPress={logout}
								/>
							)
						}}
					/>
					<Stack.Screen name="Community" component={Community} />
					<Stack.Screen name="Profile" component={Profile} />
				</>
			) : (
				<>
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
				</>
			)}
		</Stack.Navigator>
	)
}
