import React, { FC } from 'react';
import { useAction, useAtom } from '@reatom/npm-react';

import {
	Button,
	Text,
	TextInput,
	View
} from 'react-native';
import {
	fetchIssues,
	issuesAtom,
} from '../../model/TodosModel';

export const TodoList: FC = () => {
	const [issues] = useAtom(issuesAtom);
	const handleSearch = useAction(fetchIssues);

	return (
		<View>
			<TextInput value='hello' />
			<Button title='получить' onPress={() => handleSearch()} />
			{issues.map((item) => <Text key={item.id}>{item.title}</Text>)}
		</View>
	);
};
