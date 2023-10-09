import { AxiosResponse } from 'axios';

import { api } from '../apiAxios';
import { TTodos } from './types';

export const getTodos = async (): Promise<TTodos[]> => {
	const response = await api.get<TTodos[], AxiosResponse<TTodos[]>>('/');
	return response.data;
};
