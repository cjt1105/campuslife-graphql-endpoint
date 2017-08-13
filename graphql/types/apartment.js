import{
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLList
} from 'graphql';
import userType from './user';
import axios from 'axios';

export default new GraphQLObjectType({
    name: 'Apartment',
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID),
            },
            name: {
                type: GraphQLString
            },
            students: {
                type: new GraphQLList(userType),
                resolve: (_apartment) => {
                    return axios.get(`http://localhost:3000/apartments/${_apartment.id}/users`)
                    .then(res => res.data)
                }
            }
        }
    }
})