import {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
} from 'graphql';
import {Types} from 'mongoose';
import axios from 'axios';
import api from '../api'

import classType from '../../types/class';
import classModel from '../../../models/class';
import userModel from '../../../models/user'

export default {
    type: classType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, args){
       return axios.get(`${api}/classes/${args.id}`)
       .then(res => res.data)
    }
};
