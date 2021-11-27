<template>
    <div class="et_blance_content">
        <span class="et_balance_label">Balance</span>
        <span class="et_blance_amount"><sup>$</sup>{{balance}}</span>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: "TotalBalance",
    setup(){
        let balance = ref(6000);

        return{
            balance
        }
    }
}
</script>

<style lang="scss">
@import './TotalBalance.scss';
</style>