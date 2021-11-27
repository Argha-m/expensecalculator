export default {
    state:{
        expeseCategory: [
        ],
    },

    mutations:{
        expeseListMU(state, payload) {
            state.expeseList = payload.value;
        }
    },

    actions:{
        expeseListAC(context, payload) {
            context.commit('expeseListMU', payload);
        }
    },

    getters:{
        expeseListGett(state){
            return state.expeseList;
        }
    }
}