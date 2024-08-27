import {StyleSheet} from 'react-native';

export const userListItemStyles = StyleSheet.create({
  container: {
    backgroundColor: '#232533',
    marginBottom: 15,
    borderRadius: 5,
    padding: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    borderRadius: 5,
    padding: 5,
    paddingBottom: 10,
  },

  childContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    borderRadius: 5,
    padding: 5,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    color: 'orange',
    fontWeight: '700',
  },
  userName: {
    color: '#FFF',
    fontWeight: '700',
  },
  email: {
    color: '#0D99FF',
    fontWeight: '700',
  },
});
