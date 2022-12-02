import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AppStack from './AppStack'

export default function AppNav() {
	return (
		<View style={styles.root}>
			<NavigationContainer>
				<AppStack />
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
