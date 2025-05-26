import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";

import { resolvers } from "@/entities/video/model/resolvers";
import { typeDefs } from "@/entities/video/types";

const server = new ApolloServer({ typeDefs, resolvers });
const handler = startServerAndCreateNextHandler(server);

export async function POST(request: NextRequest) {
  return handler(request);
}
export const GET = POST;
