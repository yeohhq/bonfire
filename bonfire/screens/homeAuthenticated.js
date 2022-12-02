import { Fragment, useState } from 'react'
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native'
import { glamping, gokart, pilates, dance } from '../assets/images/activities'
import Carousel from '../components/Carousel'
import Searchbar from '../components/Searchbar'

const data = [
	{
		title: 'Glamping',
		subtitle: 'Have fun glamping by the beach!',
		source: glamping
	},
	{
		title: 'Pilates',
		subtitle: 'Enjoy some relaxing pilates',
		source: pilates
	},
	{
		title: 'Dance',
		subtitle: 'Dance off with your favourite music!',
		source: dance
	},
	{
		title: 'Go Kart',
		subtitle: 'Ride along with friends!',
		source: gokart
	}
]

export default function HomeAuthenticated({ navigation }) {
	const [search, setSearchText] = useState('')

	return (
		<Fragment>
			<SafeAreaView style={styles.container}>
				<ScrollView>
					<Searchbar
						placeholder="Search activities"
						onChange={setSearchText}
						value={search}
					/>
					<Text style={styles.title}>What's New</Text>
					<Carousel data={data} />
					<Text style={styles.title}>For You</Text>
					<Carousel data={data} />
					<Text style={styles.title}>Surprise Me!</Text>
					<Carousel data={data} />
				</ScrollView>
			</SafeAreaView>
		</Fragment>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'transparent'
	},
	title: {
		fontFamily: 'Poppins_600SemiBold',
		color: '#a1a1a1',
		fontSize: 24,
		marginTop: 12,
		marginBottom: 4,
		marginHorizontal: '5%'
	},
	row: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
	}
})
