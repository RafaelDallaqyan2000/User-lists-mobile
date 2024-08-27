import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native';
import {DetailsScreen, ListScreen} from '../screens';
import {DetailsIcon, ListIcon} from '../assets/icons';

export type StackNavigatorParamList = {
  DetailsScreen: never;
  ListScreen: never;
};

const Tab = createBottomTabNavigator<StackNavigatorParamList>();

export function TabNavigations() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: tabBarStyle.headerStyle,
        headerTitleStyle: tabBarStyle.headerTitleStyle,
        headerTitleContainerStyle: tabBarStyle.headerTitleContainerStyle,
        tabBarStyle: tabBarStyle.tabBarContainer,
        tabBarInactiveTintColor: '#7C819E',
        tabBarActiveTintColor: '#E7E2DE',
      }}>
      <Tab.Screen
        name="ListScreen"
        component={ListScreen}
        options={{
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: icon => (
            <View style={tabBarStyle.iconContainer}>
              <ListIcon isActive={icon.focused} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: icon => (
            <View style={tabBarStyle.iconContainer}>
              <DetailsIcon isActive={icon.focused} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const tabBarStyle = StyleSheet.create({
  tabBarContainer: {
    position: 'relative',
    backgroundColor: '#161622',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: 70,
    paddingTop: 8,
    paddingBottom: 8,
    borderTopWidth: 1,
    borderColor: '#44B678',
    borderStyle: 'solid',
  },

  headerStyle: {
    backgroundColor: '#161622',
  },

  headerTitleContainerStyle: {
    width: '100%',
    alignItems: 'center',
  },
  headerTitleStyle: {
    color: '#44B678',
  },
  iconContainer: {
    borderRadius: 30,
  },
});
