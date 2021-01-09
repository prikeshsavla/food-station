<template>
  <main class="container">
    <h1>add product</h1>
    <article>
      <label for="search-products">Search Products</label>
      <input
        id="search-products"
        v-model="query"
        type="text"
        placeholder="Search by Name or Code"
        @keyup="searchProducts"
      />
      <fieldset>
        <label
          v-for="result in searchResults"
          :key="result.item.code + result.score"
          :for="result.item.code"
        >
          <input
            :id="result.item.code"
            v-model="selectedProduct"
            type="radio"
            name="product"
            :value="result.item"
          />
          ({{ result.item.code }}) {{ result.item.name }}
        </label>
      </fieldset>
      <!-- Button -->
      <button type="button">Add</button>
    </article>

    <div class="row">
      <div class="col-12">
        <h2>order</h2>
      </div>
      <div v-for="product in order.items" :key="product.code" class="col-4">
        <card :product="product"></card>
      </div>
      <div class="col-12">
        <button>Save Order</button>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  async fetch() {
    await this.$store.dispatch('product/fetchItems')
  },
  data() {
    return {
      order: {
        items: [],
      },
      query: '',
      searchResults: null,
      selectedProduct: {},
    }
  },
  computed: {
    ...mapState({
      products: (state: any) => state.product.items,
    }),
  },
  methods: {
    searchProducts() {
      this.$store
        .dispatch('product/search', { query: this.query })
        .then((searchResults) => (this.searchResults = searchResults))
        .catch((_) => {
          // console.log(error)
        })
    },
  },
})
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 2rem;
}
</style>
