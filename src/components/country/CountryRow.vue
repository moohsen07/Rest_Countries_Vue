<template>
  <div class="countires mt-5">
    <div class="container">
      <div class="row">
        <div
          class="col-12 col-md-6 col-lg-4 col-xl-3"
          v-for="country in countries"
          :key="country.numericCode"
        >
          <router-link
            :to="{ name: 'country-page', params: { name: country.name } }"
          >
            <country-element :country="country"></country-element>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountryElement from "./CountryElement.vue";

export default {
  components: { CountryElement },
  props: ["countries"],
};
</script>

<style>
a {
  color: var(--main-color) !important;
  text-decoration: none !important;
}
a:hover {
  color: var(--main-color);
}
</style>
