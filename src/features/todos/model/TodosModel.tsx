import { atom } from '@reatom/core';
import { TTodos } from '../../../shared/api/todos';

const listAtom = atom<TTodos[]>([]);
const errorAtom = atom(null);


