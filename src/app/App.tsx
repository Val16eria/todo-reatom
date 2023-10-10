import React, { FC } from 'react';
import { createCtx } from '@reatom/core';
import { reatomContext } from '@reatom/npm-react';
import { registerRootComponent } from 'expo';
import { SafeAreaView, StatusBar, View } from 'react-native';

import { TodosScreen } from '../screens/todos';
import { AppStyles } from './App.styles';

const ctx = createCtx();

export const App: FC = () => {

  return (
    <reatomContext.Provider value={ctx}>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <View style={AppStyles.container}>
          <TodosScreen />
        </View>
      </SafeAreaView>
    </reatomContext.Provider>
  );
};

registerRootComponent(App);
