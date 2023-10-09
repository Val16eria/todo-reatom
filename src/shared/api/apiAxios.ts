import axios from 'axios';

import { REACT_NATIVE_APP_BASE_URL } from '@env';

export const api = axios.create({
	baseURL: `${REACT_NATIVE_APP_BASE_URL}`,
	headers: {
		accept: 'accept: application/json',
	},
});
