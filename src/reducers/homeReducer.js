import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { fromJS, List, Map, Seq } from 'immutable';


export default function homeReducer(state = initialState.home, action) {
    switch(action.type) {
        case types.UPDATE_KEYWORD:
            return fromJS(state)
                    .setIn(['keyword'], action.keyword)
                    .toJS();
        case types.CHANGE_PLATFORM:
            return fromJS(state)
                    .setIn(['platform'], action.platform)
                    .toJS();
        default: 
            return state;
    }
}