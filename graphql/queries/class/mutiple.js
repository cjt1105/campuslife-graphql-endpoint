import {
  GraphQLList
} from 'graphql';

import classType from '../../types/class';
import axios from 'axios'
import api from '../api'
// import classModel from '../../../models/class.js';

export default {
  type: new GraphQLList(classType),
  args: {},
  resolve (root, params, options) {
    return axios.get(`${api}/classes`)
    .then(res => res.data)
  }
};
