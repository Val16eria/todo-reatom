import React, {FC, useEffect} from 'react';

import { FlatList, Text } from 'react-native';

import { TodoListStyles } from './TodoList.styles';
import { getTodos } from "../../../../shared/api";

export const TodoList: FC = () => {
		const response = getTodos()
			.then((item) => console.log('response', item))
			.catch((err) => console.log('err', err));
		// console.log('response', response);

	return (
		<Text>список</Text>
		// <FlatList data={} renderItem={} />
	);
};
