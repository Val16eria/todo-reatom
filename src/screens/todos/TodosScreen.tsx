import React, { FC, useState } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';

import {
	TodoAllList,
	TodoClosedList,
	TodoOpenedList
} from '../../features/todos';

import { todoScreenStyles } from './TodoScreen.styles';

const renderScene = SceneMap({
	all: TodoAllList,
	closed: TodoClosedList,
	opened: TodoOpenedList,
});

export const TodosScreen: FC = () => {
	const windowLayout = useWindowDimensions();

	const [index, setIndex] = useState(0);
	const [routes] = useState([
		{ key: 'all', title: 'ALL' },
		{ key: 'closed', title: 'COMPLETED' },
		{ key: 'opened', title: 'OPENED' },
	]);

	return (
		<View style={todoScreenStyles.container}>
			<TabView
				renderTabBar={( props) => (
					<TabBar
						{...props}
						inactiveColor="#49454F"
						activeColor="#1D1B20"
						indicatorStyle={todoScreenStyles.indicatorStyle}
						style={todoScreenStyles.tabBar}
					/>
				)}
				navigationState={{ index, routes }}
				renderScene={renderScene}
				onIndexChange={setIndex}
				initialLayout={{ width: windowLayout.width }}
			/>
		</View>
	);
};
