import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    ssrMode: true,
    uri: "http://127.0.0.1:8222/api/graphql",
    cache: new InMemoryCache(),
});

export default client;
