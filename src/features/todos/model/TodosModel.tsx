import {
	reatomAsync,
	withAbort,
	withDataAtom
} from '@reatom/framework';

import { getTodos } from '../../../shared/api';

export const fetchTodos = (reatomAsync(async (ctx) => {
	return await getTodos(ctx.controller).then();
}, 'fetchTodos'))
	.pipe(withAbort({ strategy: 'last-in-win' }),
	withDataAtom([]));
