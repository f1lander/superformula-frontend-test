import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://api.yelp.com/v3/graphql",
  credentials: 'same-origin'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists

  const token = process.env.YELP_API_KEY;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.querySelector("#root")
);
