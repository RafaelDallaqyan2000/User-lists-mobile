import {StyleSheet} from 'react-native';

export const moreUserInfoStyles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    height: '100%',
  },
  name: {
    fontFamily: 'Poppins-Bold',
    color: '#000',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 20,
  },
  childContainers: {
    borderBottomColor: '#161622',
    borderBottomWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: '#000',
    marginBottom: 5,
    fontFamily: 'Poppins-Regular',
  },
  description: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'Poppins-Regular',
    marginBottom: 5,
    fontWeight: '700',
  },
  companyContainer: {
    borderWidth: 1,
    borderColor: '#666',
    padding: 10,
    borderRadius: 15,
  },
  companyInfoContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  companyTitle: {
    fontSize: 16,
    color: '#000',
    marginBottom: 25,
    fontFamily: 'Poppins-Regular',
    fontWeight: '800',
    textAlign: 'center',
  },
  companyDescription: {
    fontSize: 18,
    marginBottom: 5,
    fontFamily: 'Poppins-Regular',
    maxWidth: '50%',
    color: '#666',
    fontWeight: '700',
  },
});
