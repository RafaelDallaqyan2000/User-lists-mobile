import {Text, View} from 'react-native';
import React from 'react';
import {DetailsScreenType} from '../../screens';
import {moreUserInfoStyles} from './moreUserInfoStyles';

export function MoreUserInfo({currentUser}: DetailsScreenType) {
  const {name, username, phone, company, email, address} = currentUser;

  return (
    <View style={moreUserInfoStyles.container}>
      <Text style={moreUserInfoStyles.name}>{name}</Text>
      <View style={moreUserInfoStyles.childContainers}>
        <Text style={moreUserInfoStyles.title}>UserName</Text>
        <Text style={moreUserInfoStyles.description}>{username}</Text>
      </View>
      <View style={moreUserInfoStyles.childContainers}>
        <Text style={moreUserInfoStyles.title}>Email</Text>
        <Text style={moreUserInfoStyles.description}>{email}</Text>
      </View>
      <View style={moreUserInfoStyles.childContainers}>
        <Text style={moreUserInfoStyles.title}>Phone</Text>
        <Text style={moreUserInfoStyles.description}>{phone}</Text>
      </View>
      <View style={moreUserInfoStyles.childContainers}>
        <Text style={moreUserInfoStyles.title}>Address</Text>
        <Text style={moreUserInfoStyles.description}>{address?.city}</Text>
      </View>
      <View style={moreUserInfoStyles.companyContainer}>
        <Text style={moreUserInfoStyles.companyTitle}>About company</Text>
        <View style={moreUserInfoStyles.companyInfoContainer}>
          <Text style={moreUserInfoStyles.title}>Name</Text>
          <Text style={moreUserInfoStyles.companyDescription}>
            {company?.name}
          </Text>
        </View>
        <View style={moreUserInfoStyles.companyInfoContainer}>
          <Text style={moreUserInfoStyles.title}>Chtch Phrase</Text>
          <Text style={moreUserInfoStyles.companyDescription}>
            {company?.catchPhrase}
          </Text>
        </View>
      </View>
    </View>
  );
}
