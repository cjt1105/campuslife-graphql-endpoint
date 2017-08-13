import {
    GraphQLList
} from 'graphql';
import apartmentType from '../../types/apartment';
import api from '../api'
import axios from 'axios';

export default {
    type: new GraphQLList(apartmentType),
    args: {},
    resolve(root, args){
        return axios.get(`${api}/apartments`)
        .then(res => res.data)
    }
}