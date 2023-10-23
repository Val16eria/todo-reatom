import React, { FC } from 'react';
import { FlatList } from 'react-native';

import { TTodos } from '../../../../shared/api';
import { TodoCard } from '../todoCard';

import { todoListWrapperStyles } from './TodoListWrapper.styles';

type TTodoListWrapper = {
	todos: TTodos[];
};

export const TodoListWrapper: FC<TTodoListWrapper> = ({ todos }) => {
	return (
		<FlatList
			data={todos}
			renderItem={({ item }) => <TodoCard key={item.id} {...item} />}
			keyExtractor={(item) => item.id.toString()}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={todoListWrapperStyles.list}
		/>
	);
};
