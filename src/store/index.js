import { createStore } from 'vuex';
import expenseTrack from './expenseTrack/expenseTrack';

export default createStore({
    modules: {
        expenseTrack: expenseTrack
    }
});