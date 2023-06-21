import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo';
import apolloClient from './config/createApolloClient.js';
import { Posts } from './modules/post/index.js';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Posts />
      </ApolloProvider>
    )
  }
}

export default App;