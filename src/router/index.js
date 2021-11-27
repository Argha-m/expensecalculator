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
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router