import {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
} from 'graphql';
import {Types} from 'mongoose';
import axios from 'axios';
import api from '../api'

import userType from '../../types/user';
// import userModel from '../../../models/user';

export default {
    type: new GraphQLList(userType),
    args: {},
    resolve(root, params){
        return axios.get(`${api}/users`)
    }
};
