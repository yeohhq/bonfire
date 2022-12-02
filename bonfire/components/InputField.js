import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Controller } from 'react-hook-form'

export default function InputField({
	control,
	name,
	rules = {},
	placeholder,
	secureTextEntry,
	keyboardType = 'default'
}) {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { value, onChange, onBlur },
				fieldState: { error }
			}) => (
				<>
					<View style={styles.container}>
						<TextInput
							value={value}
							onChangeText={onChange}
							onBlur={onBlur}
							placeholder={placeholder}
							style={styles.input}
							secureTextEntry={secureTextEntry}
							keyboardType={keyboardType}
						/>
					</View>
					{error && (
						<Text style={styles.error}>
							{error.message || 'Error'}
						</Text>
					)}
				</>
			)}
		/>
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
		marginVertical: 5,
		// Text
		justifyContent: 'center'
	},
	error: {
		color: '#DD4D44',
		alignSelf: 'stretch',
		fontFamily: 'Poppins_300Light',
		paddingBottom: 8
	}
})
