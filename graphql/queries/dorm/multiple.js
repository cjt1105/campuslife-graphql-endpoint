import {
    GraphQLList
} from 'graphql';
import dormType from '../../types/dorm';
import api from '../api'
import axios from 'axios';

export default {
    type: new GraphQLList(dormType),
    args: {},
    resolve(root, args){
        return axios.get(`${api}/dorms`)
        .then(res => res.data)
    }
}