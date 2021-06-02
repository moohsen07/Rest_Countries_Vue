<template>
  <base-card class="mt-5">
    <img :src="country.flag" alt="" />
    <div class="details p-3">
      <span class="country-name">{{ country.name }}</span>
      <ul>
        <li>
          Population:
          <span> {{ numbersWithCommas(country.population) }} </span>
        </li>
        <li>
          Region: <span> {{ country.region }} </span>
        </li>
        <li>
          Capital: <span> {{ country.capital }} </span>
        </li>
      </ul>
    </div>
  </base-card>
</template>

<script>
import BaseCard from "../UI/BaseCard";
export default {
  props: ["country"],
  components: { BaseCard },
  methods: {
    numbersWithCommas(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 190px;
  opject-fit : cover;
}
.country-name {
  font-weight: 800;
}

li {
  font-weight: 600;
}
li span {
  color: var(--secondary-color);
  font-weight: 100;
}
@media (max-width: 500px) {
  .base-card {
    width: 16rem;
    margin: auto;
  }
}
</style>
