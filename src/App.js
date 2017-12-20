import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink } from 'apollo-link';
import { SubscriptionClient } from 'subscriptions-transport-ws';

import { store, history } from './store';
import AppRouter from './Router';

const GRAPHQL_ENDPOINT = 'wss://subscriptions.ap-northeast-1.graph.cool/v1/cjb30vkvv434c0146sjjn4d4w';

const httpLink = createHttpLink({ uri: 'https://api.graph.cool/simple/v1/cjb30vkvv434c0146sjjn4d4w' });

const middlewareLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('graphcoolToken');
  const authorizationHeader = token ? `Bearer ${token}` : null;
  operation.setContext({
    headers: {
      authorization: authorizationHeader
    }
  });
  return forward(operation);
});

const returnJWT = () => {
  const token = localStorage.getItem("graphcoolToken");
  return token ? `Bearer ${token}` : null;
};

const httpLinkWithAuthToken = middlewareLink.concat(httpLink);

const wsClient = new SubscriptionClient(GRAPHQL_ENDPOINT, {
  reconnect: true,
  timeout: 20000,
  connectionParams: {
    authToken: returnJWT()
  }
});

const apolloClient = new ApolloClient({
  networkInterface: wsClient,
  link: httpLinkWithAuthToken,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <AppRouter />
          </ConnectedRouter>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
