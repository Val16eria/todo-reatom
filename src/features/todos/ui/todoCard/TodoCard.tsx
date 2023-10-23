import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { Checkbox } from 'expo-checkbox';

import { todoCardStyle } from './TodoCard.style';

type TTodoCard = {
	id: number,
	title: string,
	completed: boolean,
};

export const TodoCard: FC<TTodoCard> = ({ id, title, completed }) => {
	const handleChanged = () => {
		console.log('checked');
	};

	return (
		<View style={todoCardStyle.container}>
			<Checkbox
				value={completed}
				onValueChange={handleChanged}
				color={completed ? '#4C8FCD' : undefined}
			/>
			<Text style={todoCardStyle.title}>{title}</Text>
		</View>
	);
};
