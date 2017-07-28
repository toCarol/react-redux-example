import { Map, List } from 'immutable';

// { } Map, [ ] List
let state = {
    home: {
        keyword: 'xie',
        platforms: [
            {
                id: 'mac',
                name: 'Mac',
                value: 'mac'
            },
            {
                id: 'windows',
                name: 'Windows',
                value: 'windows'
            }
        ],
        platform: 'mac'
    }
};
// state.home.platform = state.home.platforms[0];
export default state;
