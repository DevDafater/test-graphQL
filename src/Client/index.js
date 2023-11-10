import { ApolloClient, ApolloLink, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = new createHttpLink({
    uri: "https://graphql.anilist.co",
});


export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([httpLink]),
});