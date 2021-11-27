<template>
    <div v-for="item of categoryList" :key="item.id" class="et_spent_cat">
        <div class="et_spent_cat_icon">
          <i :class="['pi', item.name === 'Healthcare' ? 'pi-heart' : 'pi-shopping-bag']"></i>
        </div>
        <div class="et_spent_cat_title">
          {{item.name}}
        </div>
        <div class="et_spent_cat_amount">
          -{{item.amount}}
        </div>
    </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import {useStore} from 'vuex';

export default {
    name: "CategoryBox",
    props:{
      length: String
    },
    setup(props){
        let store = useStore();
        let categoryList = ref([]);

        onBeforeMount(()=>{
            let expenseList = store.getters.expeseListGett;
            let output = [];
            for(let i = 0; i < expenseList.length; i++ ){
                let exist = output.filter((item) => {return item.name === expenseList[i].transCat});
                if(exist.length){
                  let itemIndex = output.indexOf(exist[0]);
                  output[itemIndex].amount = (parseInt(output[itemIndex].amount) + parseInt(expenseList[i].transAmount)).toString();
                } else {
                  output.push({
                    id: i,
                    name: expenseList[i].transCat,
                    amount: expenseList[i].transAmount,
                  })
                }
            }

            if(props.length !== "full"){
              categoryList.value = output.slice(0, props.length);
            } else {
              categoryList.value = output;
            }
            console.log(categoryList.value);
        });

        return{
          categoryList
        }
    }
}
</script>

<style>

</style>