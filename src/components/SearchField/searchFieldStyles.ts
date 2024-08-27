import {StyleSheet} from 'react-native';

export const searchFieldStyles = StyleSheet.create({
  containerStyle: {
    width: '100%',
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  titleStyle: {
    color: '#7b7b8b',
    fontSize: 12,
    marginBottom: 5,
  },
  inputContainerStyle: {
    borderRadius: 15,
    backgroundColor: '#1E1E2D',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'solid',
  },
  input: {
    backgroundColor: '#1E1E2D',
    color: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 0,
    width: '90%',
    height: '100%',
  },
  eyeStyle: {
    width: 30,
    height: 30,
  },
});
