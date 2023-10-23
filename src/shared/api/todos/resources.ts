import { AxiosResponse } from 'axios';

import { api } from '../apiAxios';
import { TTodos } from './types';

export const getTodos = async (controller: AbortController): Promise<TTodos[]> => {
	const response = await api.get<TTodos[], AxiosResponse<TTodos[]>>(
		'/?_start=0&_limit=5',
		controller
	);
	return response.data;
};
