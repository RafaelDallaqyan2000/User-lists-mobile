import {StyleSheet} from 'react-native';

export const listScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
    overflow: 'hidden',
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  searchField: {
    paddingBottom: 15,
  },
});
