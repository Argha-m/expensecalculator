<template>
    <div class="et_bottom_nav">
        <ul>
            <li>
                <router-link to="/" class="p-ripple" v-ripple><i class="pi pi-home"></i><span>Home</span></router-link>
            </li>
            <li>
                <router-link to="/new-expense" class="et_pay_now p-ripple ripple-blue" v-ripple><i class="pi pi-plus-circle"></i><span>Pay Now</span></router-link>
            </li>
            <li>
                <router-link to="/history" class="p-ripple" v-ripple><i class="pi pi-history"></i><span>History</span></router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "BottomNavigation"
}
</script>

<style lang="scss">
@import './BottomNavigation.scss';
</style>