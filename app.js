import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import schema from './graphql';

var app = express();

// GraphqQL server route
app.use('/graphql', graphqlHTTP(req => ({
  schema,
  pretty: true,
  graphiql: true
})));

// Connect mongo database
// mongoose.connect('mongodb://localhost:27017/campuslife');

// start server
var server = app.listen(8080, () => {
  console.log('Listening at port', server.address().port);
});
