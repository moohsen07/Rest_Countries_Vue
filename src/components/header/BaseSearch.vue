<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-5">
        <base-card>
          <div class="search-bar">
            <i class="fas fa-search px-3"></i>
            <input
              v-model.trim="search"
              type="text"
              placeholder="Search for a country ..."
              @input="sendSearch()"
            />
          </div>
        </base-card>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCard from "../UI/BaseCard";
export default {
  components: { BaseCard },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    sendSearch() {
      this.$emit("sendSearch", this.search);
    },
  },
};
</script>

<style>
.search-bar input {
  background: none;
  border: none;
  font-size: 14px !important;
  color: var(--secondary-color);
  width: 80%;
  padding: 15px 0;
}
.search-bar input::placeholder {
  color: var(--secondary-color);
}
.search-bar input:focus {
  outline: none;
}
</style>
