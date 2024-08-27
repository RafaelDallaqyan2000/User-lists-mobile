import axios from 'axios';
import {handleChange} from './handleChange';

export const getAllUsers = () => {
  return (dispatch: any) => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => res.data)
      .then(data => {
        dispatch(handleChange('allUsers', data));
        return data;
      })
      .catch(err => {
        throw new Error(err.message);
      })
      .finally(() => {
        dispatch(handleChange('isLoadingScreen', false));
      });
  };
};
