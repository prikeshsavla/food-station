<template>
  <article class="padding-small">
    <hgroup>
      <h2>({{ product.code }}) {{ product.name }}</h2>
      <h4>INR {{ product.price }}</h4>
    </hgroup>
    <footer>
      <div class="row">
        <div class="col-4">
          <button
            class="outline"
            :disabled="quantity < 1"
            @click="quantity -= 1"
          >
            -
          </button>
        </div>
        <div class="col-4">
          <input type="text" :value="quantity" />
        </div>
        <div class="col-4">
          <button class="outline" @click="quantity += 1">+</button>
        </div>
      </div>
      <hr />
      INR {{ quantity * product.price }}
    </footer>
  </article>
</template>
<script>
export default {
  props: ['product'],
  data() {
    return {
      quantity: 0,
    }
  },
}
</script>
<style lang="scss" scoped>
footer {
  text-align: center;
}
input[type='text'] {
  margin-bottom: 0;
  text-align: center;
}
</style>
