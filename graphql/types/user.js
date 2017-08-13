import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLList
} from 'graphql';
import classType from './class';
import apartmentType from './apartment'
import axios from 'axios'

export default new GraphQLObjectType({
  name: 'User',
  fields: () => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
      firstName: {
        type: GraphQLString,
      },
      lastName: {
        type: GraphQLString
      },
      classes: {
        type: new GraphQLList(classType),
        resolve: (_user) => {
        return axios.get(`http://localhost:3000/users/${_user.id}/classes`)
        .then(res => res.data)
        }
      },
      apartment: {
        type: apartmentType,
        resolve: (_user) => {
          return axios.get(`http://localhost:3000/users/${_user.id}/apartments`)
          .then(res => res.data[0])
        }
      }
    }
  }
});
