import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {DetailsScreen, ListScreen} from '../screens';
import {TabNavigations} from './TabNavigations';

export interface VerificationScreenParams {
  phoneNumber: string;
  phoneCodeId: number;
}

export type StackNavigatorParamList = {
  DetailsScreen: never;
  ListScreen: never;
};

const Stack = createStackNavigator<StackNavigatorParamList>();

export function NavigationScreens() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group>
            <Stack.Screen
              name="ListScreen"
              component={TabNavigations}
              options={{
                headerShown: false,
                cardStyle: {backgroundColor: '#FFFFFF'},
              }}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
