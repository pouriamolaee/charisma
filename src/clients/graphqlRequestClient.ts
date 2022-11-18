import { GraphQLClient } from "graphql-request";

const headers = { authorization: "Bearer MY_TOKEN" };

const graphqlRequestClient = new GraphQLClient(
  "https://graphqlzero.almansi.me/api",
  { headers }
);

export default graphqlRequestClient;
