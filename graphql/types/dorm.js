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
    name: 'Dorm',
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
                    return axios.get(`http://localhost:3000/dorms/${_apartment.id}/users`)
                    .then(res => res.data)
                }
            }
        }
    }
})