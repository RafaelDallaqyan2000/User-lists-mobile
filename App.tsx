import React from 'react';
import {Provider} from 'react-redux';
import {NavigationScreens, store} from './src';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationScreens />
    </Provider>
  );
}
export default App;
