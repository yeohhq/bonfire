import React from 'react'
import { View } from 'react-native'
import Button from './Button'

export default function SocialSignInButton() {
	const handleSignInWithFacebook = () => {}

	const handleSignInWithGoogle = () => {}

	const handleSignInWithApple = () => {}

	return (
		<View>
			{/* <Button
				title="Sign in with Facebook"
				onPress={handleSignInWithFacebook}
				bgColor="#E7EAF4"
				fgColor="#4765A9"
				fullWidth
			/> */}
			<Button
				title="Sign in with Google"
				onPress={handleSignInWithGoogle}
				bgColor="#FAE9EA"
				fgColor="#DD4D44"
				fullWidth
			/>
			{/* <Button
				title="Sign in with Apple"
				onPress={handleSignInWithApple}
				bgColor="#e3e3e3"
				fgColor="#363636"
				fullWidth
			/> */}
		</View>
	)
}
