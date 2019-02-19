import { createStore } from 'redux';

const initialState = {
    count: 0
};

function reducer(state = initialState, action) {
    console.log("Action: ", action);
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
}

export const storeInstance = createStore(reducer);