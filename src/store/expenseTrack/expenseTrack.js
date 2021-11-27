export default {
    state:{
        balanceAmount: "6000",
        expeseList: [
            {
                transId: "1",
                transDesc: "Item Purchased",
                transCat: "Groceries",
                transDate: "15-Sep-2021",
                transAmount: "200"
            },
            {
                transId: "2",
                transDesc: "Medicine Purchased",
                transCat: "Healthcare",
                transDate: "19-Aug-2021",
                transAmount: "500"
            },
            {
                transId: "3",
                transDesc: "Monthly Items",
                transCat: "Groceries",
                transDate: "15-Aug-2021",
                transAmount: "300"
            }
        ],
    },

    mutations:{
        expeseListMU(state, payload) {
            state.expeseList.push(...payload.value);
        },
        amountIncreaseMU(state, payload) {
            state.balanceAmount = parseInt(state.balanceAmount + payload.value);
        },
        amountDecreaseMU(state, payload) {
            state.balanceAmount = parseInt(state.balanceAmount - payload.value);
        }
    },

    actions:{
        expeseListAC(context, payload) {
            context.commit('expeseListMU', payload);
        },
        amountIncreaseAC(context, payload){
            context.commit('amountIncreaseMU', payload);
        },
        amountDecreaseAC(context, payload){
            context.commit('amountDecreaseMU', payload);
        }
    },

    getters:{
        expeseListGett(state){
            return state.expeseList;
        },
        balanceAmountGett(state){
            return state.balanceAmount;
        }
    }
}