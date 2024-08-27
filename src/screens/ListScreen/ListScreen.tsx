import {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {SearchField, UserListItem} from '../../components';
import {useDebounce} from '../../hooks/useDebaunce';
import {handleChange, getAllUsers, getSearchedUsers} from '../../store';
import {listScreenStyles} from './listScreenStyles';

type ListScreenType = {
  isLoadingScreen: boolean;
  allUsers: [];
  searchText: string;
  handleChange: (key: string, value: any) => void;
  getAllUsers: () => void;
  getSearchedUsers: (searchText: string) => void;
};

function ListScreenComponent({
  isLoadingScreen,
  allUsers,
  handleChange,
  getAllUsers,
  getSearchedUsers,
  searchText,
}: ListScreenType) {
  const handleSearchUser = () => {
    handleChange('isLoadingScreen', true);
    searchText ? getSearchedUsers(searchText) : getAllUsers();
  };

  const debouncedSearchTerm = useDebounce(searchText, 1000, handleSearchUser); // 3 seconds debounce

  useEffect(() => {
    handleChange('isLoadingScreen', true);
    getAllUsers();
  }, []);

  const onRefresh = () => {
    handleChange('isLoadingScreen', true);
    handleChange('searchText', '');
    getAllUsers();
  };

  const handleChangeSearchField = (searchText: string) => {
    handleChange('searchText', searchText);
    if (searchText === debouncedSearchTerm) {
      console.log(debouncedSearchTerm, 'sss');
    }
  };

  return (
    <SafeAreaView style={listScreenStyles.container}>
      {isLoadingScreen ? (
        <ActivityIndicator size="large" color="#FFA001" />
      ) : (
        <>
          <View style={listScreenStyles.searchField}>
            <SearchField
              handleChangeText={handleChangeSearchField}
              value={searchText}
              handleSearchPress={handleSearchUser}
              placeholder="Search by Username"
            />
          </View>
          <FlatList
            data={allUsers}
            keyExtractor={(item: any) => item.id.toString()}
            renderItem={({item}) => <UserListItem user={item} />}
            refreshControl={
              <RefreshControl
                refreshing={isLoadingScreen}
                onRefresh={onRefresh}
                progressBackgroundColor={'#FFF'}
                colors={['#FF9D00', '']}
              />
            }
          />
        </>
      )}
    </SafeAreaView>
  );
}

const mapStateToProps = (state: any) => {
  return {
    isLoadingScreen: state.isLoadingScreen,
    allUsers: state.allUsers,
    searchText: state.searchText,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleChange: (key: string, value: any) =>
      dispatch(handleChange(key, value)),
    getAllUsers: () => dispatch(getAllUsers()),
    getSearchedUsers: (searchText: string) =>
      dispatch(getSearchedUsers(searchText)),
  };
};

export const ListScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListScreenComponent);
