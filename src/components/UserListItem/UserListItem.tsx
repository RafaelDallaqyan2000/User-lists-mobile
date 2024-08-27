import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {userListItemStyles} from './userListItemStyles';
import {useAppDispatch} from '../../store/configureStore';
import {handleChange} from '../../store';
import {useNavigation} from '@react-navigation/native';

type UserListItemType = {
  user: any;
};

export function UserListItem({user}: UserListItemType) {
  const navigation = useNavigation(); // Assuming useNavigation hook is available in the component
  const {username, email} = user;
  const dispatch = useAppDispatch();

  const handlePressItem = () => {
    dispatch(handleChange('currentUser', user));
    navigation.navigate('DetailsScreen' as never);
  };

  return (
    <TouchableOpacity
      style={userListItemStyles.container}
      onPress={handlePressItem}>
      <View style={userListItemStyles.titleContainer}>
        <Text style={userListItemStyles.title}>Username</Text>
        <Text style={userListItemStyles.userName}>{username}</Text>
      </View>
      <View style={userListItemStyles.childContainer}>
        <Text style={userListItemStyles.title}>Email</Text>
        <Text style={userListItemStyles.email}>{email}</Text>
      </View>
    </TouchableOpacity>
  );
}
