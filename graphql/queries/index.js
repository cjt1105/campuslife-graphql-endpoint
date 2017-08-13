import classQuery from './class';
import userQuery from './user';
import apartmentQuery from './apartment';
import dormQuery from './dorm'

export default {
  ...classQuery,
  ...userQuery,
  ...apartmentQuery,
  ...dormQuery
};
