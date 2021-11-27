<template>
  <div class="et_page_container">
    <h2>History</h2>
    <div class="et-trans-history-list">
        <TransactionBox :length="'full'" />
    </div>
  </div>
</template>

<script>
import TransactionBox from '../../views/transactionBox/TransactionBox';
export default {
    name: "TransactionHistory",
    components: {
       TransactionBox 
    }
}
</script>

<style lang="scss" scoped>
@import './ExpenseHistory.scss';
</style>