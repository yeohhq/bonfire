import { View, FlatList } from 'react-native'
import Card from './Card'

export default function Carousel({ data }) {
	return (
		<FlatList
			data={data}
			horizontal
			pagingEnabled
			showsHorizontalScrollIndicator={false}
			keyExtractor={(_, index) => index.toString()}
			renderItem={({ item }) => {
				return (
					<Card
						title={item.title}
						subtitle={item.subtitle}
						img={item.source}
					/>
				)
			}}
			style={{
				marginVertical: 4
			}}
		/>
	)
}
