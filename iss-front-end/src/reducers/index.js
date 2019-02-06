import { combineReducers } from 'redux';
import inventoryReducer from './inventoryReducer';
import locationReducer from './locationReducer';
import userAccountsReducer from './userAccountsReducer';
import usersReducer from './usersReducer';
import volunteersReducer from './volunteersReducer'


export default combineReducers({
  inventory: inventoryReducer,
  location: locationReducer,
  userAccounts: userAccountsReducer,
  users: usersReducer,
  volunteers: volunteersReducer

})
