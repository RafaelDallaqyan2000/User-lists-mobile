import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {MoreUserInfo, ShowEmptyInfo} from '../../components';
import {detailsScreenStyles} from './detailsScreenStyles';

export type DetailsScreenType = {
  currentUser: {
    address: {
      city: string;
      geo: {
        lat: string;
        lng: string;
      };
      street: string;
      suite: string;
      zipcode: string;
    };
    company: {
      bs: string;
      catchPhrase: string;
      name: string;
    };
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
  };
};

function DetailsScreenComponent({currentUser}: DetailsScreenType) {
  return (
    <SafeAreaView style={detailsScreenStyles.container}>
      <ScrollView>
        {Object.keys(currentUser)?.length > 0 ? (
          <MoreUserInfo currentUser={currentUser} />
        ) : (
          <ShowEmptyInfo />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const mapStateToProps = (state: any) => {
  return {
    currentUser: state.currentUser,
  };
};

export const DetailsScreen = connect(
  mapStateToProps,
  null,
)(DetailsScreenComponent);
