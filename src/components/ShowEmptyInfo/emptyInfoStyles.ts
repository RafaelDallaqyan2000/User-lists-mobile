import {StyleSheet} from 'react-native';

export const emptyInfoStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 15,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});
