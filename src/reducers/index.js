import { combineReducers } from 'redux';
import MainReducer from './MainReducer';
import JobDescriptionData from './JobDescription';

const rootReducer = combineReducers({
  tokenDetails : MainReducer,
  JobDescriptionData: JobDescriptionData
});

export default rootReducer;