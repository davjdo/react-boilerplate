import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from './components/Layout/Layout';

const App = props => (
  <div>
    <Layout>
      <p>Test</p>
    </Layout>
  </div>
);

export default hot(module)(App);
