import React, { FC, useState } from 'react';
import {Text, useWindowDimensions, View} from 'react-native';
import {
	SceneMap,
	TabBar,
	TabView
} from 'react-native-tab-view';

import { TodoList } from '../../features/todos';

import { TodoScreenStyles } from './TodoScreen.styles';

const FirstRoute = () => {
	return (
		<View style={{flex: 1, backgroundColor: '#ff4081'}}>
			<TodoList />
		</View>
	);
};

const SecondRoute = () => {
	return (
		<View style={{flex: 1, backgroundColor: '#7b50e3'}}>
			<Text>вторая</Text>
		</View>
	);
};

const TherdRoute = () => {
	return (
		<View style={{flex: 1, backgroundColor: 'rgba(29,237,255,0.53)'}}>
			<Text>третья</Text>
		</View>
	);
};

const renderScene = SceneMap({
	all: FirstRoute,
	completed: SecondRoute,
	uncompleted: TherdRoute,
});

export const TodosScreen: FC = () => {
	const windowLayout = useWindowDimensions();

	const [index, setIndex] = useState(0);
	const [routes] = useState([
		{ key: 'all', title: 'Все' },
		{ key: 'completed', title: 'Завершенные' },
		{ key: 'uncompleted', title: 'Незавершенные' },
	]);

	return (
		<View style={{height: "100%"}}>
			<TabView
				renderTabBar={( props) => (
					<TabBar
						{...props}
						// getLabelText={({ route }) => route.title}
						inactiveColor="#49454F"
						activeColor="#1D1B20"
						indicatorStyle={TodoScreenStyles.indicatorStyle}
						style={TodoScreenStyles.tabBar}
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
