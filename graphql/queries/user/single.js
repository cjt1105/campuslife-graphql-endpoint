import {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
} from 'graphql';
import {Types} from 'mongoose';
import axios from 'axios';
import api from '../api';

import userType from '../../types/user';
import userModel from './../../../models/user'

export default {
    type: userType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, args){
        return axios.get(`${api}/users/${args.id}`)
        .then(res => res.data)
    }
};
