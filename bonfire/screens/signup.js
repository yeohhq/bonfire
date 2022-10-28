import { StyleSheet, SafeAreaView } from 'react-native'
import PrimaryButton from '../components/Button'

export default function SignUp() {
	return (
		<SafeAreaView style={styles.container}>
			<PrimaryButton title="Sign Up" />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})
