import { action, atom } from '@reatom/core';

import { getTodos } from '../../../shared/api';
import { TTodos } from '../../../shared/api/todos';

export const issuesAtom = atom<TTodos[]>([], 'issuesAtom');
export const fetchIssues = action((ctx) => {
	ctx.schedule(async () => {
		const todos = await getTodos().then();
		issuesAtom(ctx, todos);
	})
}, 'fetchIssues');
