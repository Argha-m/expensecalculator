<template>
    <div v-for="(trans, i) of expenseList" :key="trans.id" :class="['et_trans_strip', i === (expenseList.length - 1) ? 'et_trans_strip_last' : '']">
        <div class="et_trans_icon">
          <i class="pi pi-arrow-up-right"></i>
        </div>
        <div class="et_trans_info">
          <span class="et_trans_short_info">{{trans.transDesc}}</span>
          <span class="et_trans_cat">{{trans.transCat}}</span>
          <span class="et_trans_date">{{trans.transDate}}</span>
        </div>
        <div class="et_trans_amount">
          ${{trans.transAmount}}
        </div>
    </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import {useStore} from 'vuex';
export default {
    name: "TransactionBox",
    props:{
      length: String
    },
    setup(props){
        let store = useStore();

        let expenseList = ref();

        onBeforeMount(async()=>{
          let storeExpList = store.getters.expeseListGett;
          await storeExpList.sort((a, b) => {
            return new Date(b.transDate) - new Date(a.transDate);
          });
          if(props.length !== "full"){
            expenseList.value = storeExpList.slice(0, props.length);
          } else {
            expenseList.value = storeExpList;
          }
        })

        return {
            expenseList
        }
    }
}
</script>

<style lang="scss" scoped>
@import './TransactionBox.scss';
</style>