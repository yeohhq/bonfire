import { useContext } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AppStack from './AppStack'
import AuthStack from './AuthStack'

export default function AppNav() {
	// if (isLoading) {
	// 	return (
	// 		<View style={styles.loading}>
	// 			<ActivityIndicator size={'large'} />
	// 		</View>
	// 	)
	// }

	return (
		<View style={styles.root}>
			<NavigationContainer>
				{/* <AppStack /> */}
				<AuthStack />
			</NavigationContainer>
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: '#F9FBFC'
	},
	loading: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})
