import { SearchBar } from 'react-native-elements'
import { StyleSheet } from 'react-native'

export default function Searchbar({ placeholder, onChange, value }) {
	return (
		<SearchBar
			placeholder={placeholder}
			onChangeText={onChange}
			value={value}
			round
			containerStyle={styles.searchContainer}
			inputContainerStyle={styles.searchInputContainer}
		/>
	)
}

const styles = StyleSheet.create({
	searchContainer: {
		backgroundColor: 'transparent',
		borderWidth: 0,
		borderTopWidth: 0,
		borderBottomWidth: 0
	},
	searchInputContainer: {
		backgroundColor: '#e2e2e2',
		marginHorizontal: 8
	}
})
