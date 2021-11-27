<template>
    <div class="et_page_container">
        <h2>New payment</h2>
        <div class="et_new_payment_form">
            <form @submit.prevent="submitPayment()">
                <div class="p-fluid">
                    <div class="p-field p-mb-2">
                        <label for="transInfo">Payment Info</label>
                        <InputText id="transInfo" type="text" v-model="paymentState.description" />
                        <small class="et_input_error" v-if="paymentState.descriptionError">Payment Info is missing.</small>
                    </div>
                    <div class="p-field p-mb-2">
                        <label for="transCat">Category</label>
                        <Dropdown inputId="transCat" v-model="paymentState.category" :options="expenseCategory" placeholder="Select A Category" />
                        <small class="et_input_error" v-if="paymentState.categoryError">Category is missing.</small>
                    </div>
                    <div class="p-field">
                        <label for="transAmnt">Amount</label>
                        <InputNumber id="transAmnt" v-model="paymentState.amount" prefix="$" mode="decimal" :minFractionDigits="2" />
                        <small class="et_input_error" v-if="paymentState.amountError">Amount is missing.</small>
                    </div>
                    <div class="p-field et_new_payment_submit">
                        <Button type="submit" label="Submit" class="p-button-primary" />
                    </div>
                    <div v-if="paymentState.status" class="et_new_payment_form_sccess">Payment Completed Successfully.</div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue';
import { useStore } from 'vuex';

export default {
    name: "NewExpenses",
    setup(){
        let store = useStore();
        const expenseCategory = ref(["Groceries", "Healthcare", "Shopping"])
        const paymentState = reactive({
            description: '',
            category: '',
            amount: '',
            descriptionError: false,
            categoryError: false,
            amountError: false,
            status: false
        });

        const submitPayment = () => {
            if(paymentState.description === ''){
                paymentState.descriptionError = true;
            } else {
                paymentState.descriptionError = false;
            }
            if(paymentState.category === ''){
                paymentState.categoryError = true;
            } else {
                paymentState.categoryError = false;
            }
            if(paymentState.amount === ''){
                paymentState.amountError = true;
            } else {
                paymentState.amountError = false;
            }
            if(!paymentState.descriptionError && !paymentState.amountError && !paymentState.categoryError){
                let date = new Date();
                let formatData = date.getDate() + "-" + date.toLocaleString('default', { month: 'short' }) + "-" + date.getFullYear();
                console.log(paymentState, date.getTime(), formatData);
                store.dispatch("expeseListAC", {
                    value: [{
                        transId: date.getTime(),
                        transDesc: paymentState.description,
                        transCat: paymentState.category,
                        transDate: formatData,
                        transAmount: paymentState.amount
                    }]
                });
                store.dispatch("amountDecreaseAC", {
                    value: paymentState.amount
                });
                paymentState.description = '';
                paymentState.category = '';
                paymentState.amount = '';
                paymentState.status = true;
            }
        }

        return {
            expenseCategory,
            paymentState,
            submitPayment
        }
    }
}
</script>

<style lang="scss" scoped>
@import './NewExpenses.scss';
</style>