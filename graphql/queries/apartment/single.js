import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';
import axios from 'axios';
import api from '../api';
import apartmentType from '../../types/apartment'

export default {
    type: apartmentType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, args){
        return axios.get(`${api}/apartments/${args.id}`)
        .then(res => res.data)
    }
}
