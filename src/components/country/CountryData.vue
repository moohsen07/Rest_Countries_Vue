<template>
  <div class="country-data">
    <h3>{{ country.name }}</h3>
    <div class="d-flex justify-content-between">
      <ul>
        <li>
          Native Name: <span>{{ country.nativeName }}</span>
        </li>
        <li>
          Population: <span>{{ numbersWithCommas(country.population) }}</span>
        </li>
        <li>
          Region: <span>{{ country.region }}</span>
        </li>
        <li>
          Sub Region: <span>{{ country.subregion }}</span>
        </li>
        <li>
          Captal: <span>{{ country.capital }}</span>
        </li>
      </ul>
      <ul>
        <li>
          Top Level Domain:
          <span v-for="domain in country.topLevelDomain" :key="domain">{{
            domain
          }}</span>
        </li>
        <li>
          currencies:
          <span v-for="currency in country.currencies" :key="currency.code">{{
            currency.name
          }}</span>
        </li>
        <li>
          Languages:
          <span v-for="language in country.languages" :key="language.name">{{
            language.name
          }}</span>
        </li>
      </ul>
    </div>
    <div class="tags mt-4" v-if="country.borders.length">
      <span
        >Border Countries:
        <ul class="d-inline-block">
          <li
            v-for="border in country.borders"
            :key="border"
            class="tag shadow rounded"
          >
            {{ border }}
          </li>
        </ul>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["country"],
  methods: {
    numbersWithCommas(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style scoped>
h3 {
  font-weight: 800;
}
ul li,
.tags span:first-of-type {
  color: var(--secondary-color);
  font-size: 14px;
  font-weight: 600;
  padding: 3px 0;
}
ul li span {
  font-weight: 100;
}
.tags {
  color: var(--secondary-color);
}
.tag {
  background-color: var(--background-elements);
  padding: 3px 20px;
  margin: 0 0 15px 15px;
  font-weight: 100;
  font-size: 11px;
}
.tags li {
  display: inline-block;
}
@media (min-width: 768px) {
  .country-data {
    padding: 20px;
  }
}
</style>
