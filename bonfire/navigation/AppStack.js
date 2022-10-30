import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MaterialIcons } from 'react-native-vector-icons'
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
	return (
		<Stack.Navigator
			screenOptions={{
				headerTransparent: true,
				headerBackTitleVisible: false
			}}
		>
			<Stack.Screen
				name="Home"
				component={HomeAuthenticated}
				options={{
					headerRight: () => (
						<MaterialIcons
							style={{ paddingRight: 36 }}
							name="logout"
							size={24}
							color="black"
							// onPress={logout}
						/>
					)
				}}
			/>
			<Stack.Screen name="Community" component={Community} />
			<Stack.Screen name="Profile" component={Profile} />
		</Stack.Navigator>
	)
}
