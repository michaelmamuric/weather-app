import React from 'react';
import Layout from './containers/Layout';
import SearchBar from './components/SearchBar';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <Layout>
      <NavigationBar />
      <SearchBar />
    </Layout>
  );
}

export default App;
