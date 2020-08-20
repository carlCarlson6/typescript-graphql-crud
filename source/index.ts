import express from 'express';
import {buildSchema} from 'type-graphql';
import { GraphQLSchema } from 'graphql';
import {ApolloServer} from 'apollo-server-express';
import { MovieResolver } from './gql/resolvers/MovieResolver';
import DbConfig from './database/config/DbConfig';

(async () => {
    const expressServer = express();

    const dbConfig = new DbConfig();
    await dbConfig.connect();

    const schema: GraphQLSchema = await buildSchema({
        resolvers: [MovieResolver]
    });

    const apolloServer = new ApolloServer({schema});
    apolloServer.applyMiddleware({ app: expressServer, cors:false });

    expressServer.listen(4000, () => {
        console.log('server is running')
    })
})();