import React, {FC, useEffect} from 'react';
import { useAction, useAtom } from '@reatom/npm-react';

import { fetchTodos, todosAtom } from '../../model/TodosModel';
import { TodoListWrapper } from '../todoListWrapper';

export const TodoClosedList: FC = () => {
	const [todos] = useAtom(todosAtom);
	const handleGetTodos = useAction(fetchTodos);

	useEffect(() => {
		handleGetTodos();
	}, []);

	return <TodoListWrapper todos={todos.filter((todo) => todo.completed)} />
};
