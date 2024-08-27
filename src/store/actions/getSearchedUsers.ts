import axios from 'axios';
import {handleChange} from './handleChange';

export const getSearchedUsers = (searchText: string) => {
  return (dispatch: any) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users?username=${searchText}`)
      .then(res => res.data)
      .then(data => {
        dispatch(handleChange('allUsers', data));
        dispatch(handleChange('isLoadingScreen', false));
        return data;
      })
      .catch(err => {
        throw new Error(err.message);
      });
  };
};
