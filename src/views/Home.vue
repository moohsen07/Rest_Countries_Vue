<template>
  <div class="home">
    <base-search @sendSearch="getSearch"></base-search>
    <country-row :countries="filteredCountries"></country-row>
  </div>
</template>

<script>
import axios from "axios";
import BaseSearch from "@/components/header/BaseSearch.vue";
import CountryRow from "../components/country/CountryRow";

export default {
  components: { CountryRow, BaseSearch },
  data() {
    return {
      countries: [],
      search: "",
    };
  },
  methods: {
    getCountries() {
      axios.get("https://restcountries.eu/rest/v2/all").then((resp) => {
        this.countries = resp.data;
      });
    },
    getSearch(search) {
      this.search = search;
    },
  },
  computed: {
    filteredCountries() {
      let capitalName = this.search
        ? this.search[0].toUpperCase() + this.search.substring(1)
        : this.search;
      return this.countries.filter((country) => {
        return country.name.match(capitalName);
      });
    },
  },
  created() {
    this.getCountries();
  },
};
</script>
