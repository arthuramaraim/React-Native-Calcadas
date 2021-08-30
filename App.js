import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import CadastrarAvaliacao from './src/pages/CadastrarAvaliacao';
import VisualizarAvaliacoes from './src/pages/VisualizarAvaliacoes';
import MenuPrincipal from './src/pages/MenuPrincipal';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="MenuPrincipal" screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen  name="MenuPrincipal" component={MenuPrincipal} 
        options={{title: 'Menu Principal'}}/>
        <Stack.Screen  name="CadastrarAvaliacao" component={CadastrarAvaliacao}
        options={{title: "Cadastrar Avaliação"}} />
        <Stack.Screen  name="VisualizarAvaliacoes" component={VisualizarAvaliacoes}
       options={{title: "Visualizar Avaliações"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


