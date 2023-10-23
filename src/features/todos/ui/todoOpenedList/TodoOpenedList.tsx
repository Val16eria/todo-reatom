import React, { FC, useEffect } from 'react';
import { useAction, useAtom } from '@reatom/npm-react';

import { fetchTodos } from '../../model/TodosModel';
import { TodoListWrapper } from '../todoListWrapper';
import { Loader } from '../../../../shared/ui';

export const TodoOpenedList: FC  = () => {
	const [todos] = useAtom(fetchTodos.dataAtom);
	const handleGetTodos = useAction(fetchTodos);
	const [loading] = useAtom((ctx) => ctx.spy(fetchTodos.pendingAtom) > 0);

	useEffect(() => {
		handleGetTodos();
	}, []);

	if (loading) {
		return <Loader />;
	}

	return <TodoListWrapper todos={todos?.filter((todo) => !todo.completed)} />
};
