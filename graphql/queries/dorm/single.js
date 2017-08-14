import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';
import axios from 'axios';
import api from '../api';
import dormType from '../../types/dorm'

export default {
    type: dormType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, args){
        return axios.get(`${api}/dorms/${args.id}`)
        .then(res => res.data)
    }
}