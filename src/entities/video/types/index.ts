import { gql } from "graphql-tag";

export const typeDefs = gql`
  type VideosList {
    id: ID!
    name: String!
    hls: String!
  }
  type Query {
    videos: [VideosList!]!
  }
`;
