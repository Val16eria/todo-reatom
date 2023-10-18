import { StyleSheet } from 'react-native';

export const todoCardStyle = StyleSheet.create({
	container: {
		flexDirection: 'row',
		gap: 30,
		padding: 10,
		alignItems: 'flex-start',
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: 'blue',
	},
	title: {
		flex: 1,
		flexWrap: 'wrap',
	},
});
