import {
	View,
	StyleSheet,
	Text,
	Image,
	useWindowDimensions
} from 'react-native'

export default function Card({ title, subtitle, img }) {
	const { width, height } = useWindowDimensions()
	const cardWidth = width - 28 // Margin horizontal is 14
	const imageHeight = height * 0.2

	return (
		<View style={[styles.card, { width: cardWidth }]}>
			<Image
				style={[
					styles.image,
					{
						height: imageHeight
					}
				]}
				source={img}
			/>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.subtitle}>{subtitle}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 8,
		borderWidth: 0.5,
		borderColor: '#d4d4d4',
		alignItems: 'flex-start',
		marginHorizontal: 14
	},
	image: {
		width: '100%',
		resizeMode: 'cover',
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		justifyContent: 'center'
	},
	title: {
		fontFamily: 'Poppins_600SemiBold',
		fontSize: 18,
		fontWeight: 'bold',
		marginHorizontal: 12,
		marginTop: 8
	},
	subtitle: {
		fontFamily: 'Poppins_300Light',
		fontSize: 14,
		marginHorizontal: 12,
		marginBottom: 8
	}
})
