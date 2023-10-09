import React, { FC } from 'react';
import { registerRootComponent } from 'expo';
import { SafeAreaView, StatusBar, View } from 'react-native';

import { TodosScreen } from '../screens/todos';
import { AppStyles } from './App.styles';

export const App: FC = () => {

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={AppStyles.container}>
        <TodosScreen />
      </View>
    </SafeAreaView>
  );
};

registerRootComponent(App);
