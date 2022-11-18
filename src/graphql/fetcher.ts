import graphqlRequestClient from "../clients/graphqlRequestClient";

export const fetchData =
  <TData, TVariables>(
    query: string,
    variables?: TVariables,
    options?: RequestInit["headers"]
  ): (() => Promise<TData>) =>
  async () => {
    let res;
    try {
      res = await graphqlRequestClient.request(query, variables);
    } catch (error) {
      console.log("GLOBAL ERROR:", error);
    }
    return res;
  };
