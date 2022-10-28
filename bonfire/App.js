import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import CustomStatusBar from './components/CustomStatusBar'
import Navigator from './routes/homeStack'
import Splash from './screens/splash'

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(true)

	if (!fontsLoaded) {
		return <Splash />
	}

	return (
		<View style={styles.root}>
			<Navigator style={styles.padded} />
			<CustomStatusBar />
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: '#F9FBFC'
	}
})
