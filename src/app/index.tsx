import React, { FC } from 'react';
import { createCtx } from '@reatom/core';
import { reatomContext } from '@reatom/npm-react';
import { registerRootComponent } from 'expo';
import { SafeAreaView, StatusBar, View } from 'react-native';

import { TodosScreen } from '../screens/todos';

import { globalStyles } from './styles/global.styles';

const ctx = createCtx();

export const Index: FC = () => {

  return (
    <reatomContext.Provider value={ctx}>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <View style={globalStyles.container}>
          <TodosScreen />
        </View>
      </SafeAreaView>
    </reatomContext.Provider>
  );
};

registerRootComponent(Index);
