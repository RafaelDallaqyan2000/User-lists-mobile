import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {emptyInfoStyles} from './emptyInfoStyles';

export function ShowEmptyInfo({title = 'Is Empty'}: {title?: string}) {
  return (
    <View style={emptyInfoStyles.container}>
      <Text style={emptyInfoStyles.title}>{title}</Text>
    </View>
  );
}
