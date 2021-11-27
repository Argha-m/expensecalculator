<template>
    <div class="et_blance_content">
        <span class="et_balance_label">Balance</span>
        <span class="et_blance_amount"><sup>$</sup>{{balance}}</span>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    name: "TotalBalance",
    setup(){
        let store = useStore();
        let balance = computed(()=> store.getters.balanceAmountGett);

        return{
            balance
        }
    }
}
</script>

<style lang="scss">
@import './TotalBalance.scss';
</style>