import React, { FC } from 'react';
import { FlatList, View } from 'react-native';

import { TodoCard } from '../todoCard';
import { TTodos } from '../../../../shared/api/todos';

import { todoListWrapperStyles } from './TodoListWrapper.styles';

type TTodoListWrapper = {
	todos: TTodos[];
};

export const TodoListWrapper: FC<TTodoListWrapper> = ({ todos }) => {
	return (
		<View>
			<FlatList
				data={todos}
				renderItem={({ item }) => <TodoCard key={item.id} {...item} />}
				keyExtractor={(item) => item.id.toString()}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={todoListWrapperStyles.list}
			/>
		</View>
	);
};
