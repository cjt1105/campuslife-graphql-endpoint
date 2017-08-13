import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} from 'graphql';
import userType from '../types/user'
import userModel from '../../models/user'
import axios from 'axios'

export default new GraphQLObjectType({
  name: 'Class',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    section: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    students: {
      type: new GraphQLList(userType),
      resolve: (_class) => {
        return axios.get(`http://localhost:3000/classes/${_class.id}/users`)
        .then(res => res.data)
      }
    }
  }
});
