<template>
  <div class="et_page_container">
    <h2>Dashboard</h2>
    <TotalBalance />
    <div class="et_rows">
      <h3>Most Spent</h3>
      <CategoryBox :length="'3'" />
      <div class="et_seeall_btn p-ripple" @click="$router.push('/category')" v-ripple>
        <div class="et_seeall_btn_label">See All</div>
        <div class="et_seeall_btn_icon"><i class="pi pi-angle-right"></i></div>
      </div>
    </div>
    <div class="et_rows">
      <h3>Last Transaction</h3>
      <TransactionBox :length="'3'" />
      <div class="et_seeall_btn et_seeall_btn_white p-ripple ripple-blue" @click="$router.push('/history')" v-ripple>
        <div class="et_seeall_btn_label">See All</div>
        <div class="et_seeall_btn_icon"><i class="pi pi-angle-right"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
import TotalBalance from '../../views/totalBalance/TotalBalance.vue';
import TransactionBox from '../../views/transactionBox/TransactionBox.vue';
import CategoryBox from '../../views/categoryBox/CategoryBox.vue';

export default {
  name: "Dashboard",
  components: {
    TotalBalance,
    TransactionBox,
    CategoryBox
  },
  setup(){
  }
}
</script>

<style lang="scss">
@import './Dashboard.scss';
</style>