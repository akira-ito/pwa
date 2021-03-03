import { IResolvers } from "graphql-tools";

export interface IGraphQLInterfaces {
    graphQL(): IResolvers;
}