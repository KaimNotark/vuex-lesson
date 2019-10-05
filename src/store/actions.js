export const updateValue = ({ commit }, payload) => {
    commit('updateValue', payload);
};
// for more actions:
// export const action2 = () => {};

// Example use variables for all project:

// import * as types from './types';

// export default {
//     [types.UPDATE_VALUE]: ({commit}, payload) => {
//         commit(types.MUTATE_UPDATE_VALUE, payload)
//     }
// };