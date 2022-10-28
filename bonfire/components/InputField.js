import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'

export default function InputField({
	value,
	setValue,
	placeholder,
	secureTextEntry
}) {
	return (
		<View style={styles.container}>
			<TextInput
				value={value}
				onChangeText={setValue}
				placeholder={placeholder}
				style={styles.input}
				secureTextEntry={secureTextEntry}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		width: '100%',
		height: 48,
		borderColor: '#e8e8e8',
		borderWidth: 1,
		borderRadius: 8,
		paddingHorizontal: 16,
		marginVertical: 4,
		// Text
		justifyContent: 'center'
	},
	input: {}
})
