import * as types from './actionTypes';
export function updateKeyword(keyword) {
    return {
        type: types.UPDATE_KEYWORD,
        keyword
    };
}
export function changePlatform(platform) {
    return {
        type: types.CHANGE_PLATFORM,
        platform
    };
}