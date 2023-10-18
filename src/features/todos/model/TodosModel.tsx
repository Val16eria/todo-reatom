import { action, atom } from '@reatom/core';

import { getTodos } from '../../../shared/api';
import { TTodos } from '../../../shared/api/todos';

export const todosAtom = atom<TTodos[]>([], 'todosAtom');

export const fetchTodos = action((ctx) => {
	ctx.schedule(async () => {
		const todos = await getTodos().then();
		todosAtom(ctx, todos);
	})
}, 'fetchTodos');
