<template>
  <div class="country mt-5">
    <div class="container">
      <base-button class="mb-5"
        ><span @click="back()"
          ><i class="fas fa-long-arrow-alt-left"></i> Back</span
        ></base-button
      >

      <div class="row">
        <div class="col-md-6">
          <img :src="country.flag" class="img-fluid" alt="" />
        </div>
        <div class="col-md-6 py-md-0 py-5">
          <country-data :country="country"></country-data>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BaseButton from "@/components/UI/BaseButton.vue";
import CountryData from "@/components/country/CountryData.vue";
export default {
  components: { BaseButton, CountryData },
  data() {
    return {
      name: this.$route.params.name,
      country: {},
    };
  },
  methods: {
    getCountry() {
      axios
        .get(`//restcountries.eu/rest/v2/name/${this.name}`)
        .then((resp) => (this.country = resp.data[0]));
    },
    back() {
      this.$router.back();
    },
  },
  created() {
    this.getCountry();
  },
};
</script>
<style scoped>
@media (min-width: 768px) {
  img {
    width: 75%;
    height: 75%;
  }
}
</style>
