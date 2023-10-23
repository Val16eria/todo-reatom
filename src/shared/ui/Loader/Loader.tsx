import React, { FC } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { loaderStyles } from './Loader.styles';

export const Loader: FC = () => {
	return (
		<View style={loaderStyles.container}>
			<ActivityIndicator size='large' color='#4C8FCD' />
		</View>
	);
};
