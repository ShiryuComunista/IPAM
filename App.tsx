import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import HomeContent from './src/components/HomeContent';

export default function App() {
  return (
    <Provider store={store}>
      <HomeContent />
    </Provider>
  );
}