<template>
  <div class="et_page_container">
    <h2>Expense Category</h2>
    <div class="et-trans-category-list">
        <CategoryBox :length="'full'" />
    </div>
  </div>
</template>

<script>
import CategoryBox from '../../views/categoryBox/CategoryBox.vue';
export default {
    name: "CategoryList",
    components: {
       CategoryBox 
    }
}
</script>

<style lang="scss" scoped>
@import './Categories.scss';
</style>