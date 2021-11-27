import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue'

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => defineAsyncComponent(() => import('../components/pages/dashboard/Dashboard.vue'))
    },
    {
        path: '/new-expense',
        name: 'AddExpense',
        component: () => defineAsyncComponent(() => import('../components/pages/newExpenses/NewExpenses.vue'))
    },
    {
        path: '/history',
        name: 'TransactionHistory',
        component: () => defineAsyncComponent(() => import('../components/pages/expenseHistory/ExpenseHistory.vue'))
    },
    {
        path: '/category',
        name: 'CategoryList',
        component: () => defineAsyncComponent(() => import('../components/pages/categories/Categories.vue'))
    },
    { 
        path: '/:pathMatch(.*)*',
        redirect: { name: 'Dashboard' }
    }
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router