<template>
  <div class="et_page_container">
    <h2>Dashboard</h2>
    <TotalBalance />
    <div class="et_rows">
      <h3>Most Spent</h3>
      <div class="et_spent_cat">
        <div class="et_spent_cat_icon">
          <i class="pi pi-shopping-bag"></i>
        </div>
        <div class="et_spent_cat_title">
          Groceries
        </div>
        <div class="et_spent_cat_amount">
          -205
        </div>
      </div>
      <div class="et_spent_cat">
        <div class="et_spent_cat_icon">
          <i class="pi pi-heart"></i>
        </div>
        <div class="et_spent_cat_title">
          Healthcare
        </div>
        <div class="et_spent_cat_amount">
          -153
        </div>
      </div>
      <div class="et_spent_cat">
        <div class="et_spent_cat_icon">
          <i class="pi pi-heart"></i>
        </div>
        <div class="et_spent_cat_title">
          Shopping
        </div>
        <div class="et_spent_cat_amount">
          -1500
        </div>
      </div>
      <div class="et_seeall_btn">
        <div class="et_seeall_btn_label">See All</div>
        <div class="et_seeall_btn_icon"><i class="pi pi-angle-right"></i></div>
      </div>
    </div>
    <div class="et_rows">
      <h3>Last Transaction</h3>
      <div class="et_trans_strip">
        <div class="et_trans_icon">
          <i class="pi pi-arrow-up-right"></i>
        </div>
        <div class="et_trans_info">
          <span class="et_trans_short_info">Item Purchased</span>
          <span class="et_trans_cat">Groceries</span>
          <span class="et_trans_date">15-Sep-2021</span>
        </div>
        <div class="et_trans_amount">
          $20
        </div>
      </div>
      <div class="et_trans_strip et_trans_strip_last">
        <div class="et_trans_icon">
          <i class="pi pi-arrow-up-right"></i>
        </div>
        <div class="et_trans_info">
          <span class="et_trans_short_info">Medicine Purchased</span>
          <span class="et_trans_cat">Healthcare</span>
          <span class="et_trans_date">15-Aug-2021</span>
        </div>
        <div class="et_trans_amount">
          $28
        </div>
      </div>
      <div class="et_seeall_btn et_seeall_btn_white">
        <div class="et_seeall_btn_label">See All</div>
        <div class="et_seeall_btn_icon"><i class="pi pi-angle-right"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
import TotalBalance from '../../views/totalBalance/TotalBalance';

export default {
  name: "Dashboard",
  components: {
    TotalBalance
  }
}
</script>

<style lang="scss">
@import './Dashboard.scss';
</style>