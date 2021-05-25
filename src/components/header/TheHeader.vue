<template>
  <base-card>
    <header class="py-3">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <span>Where in the world?</span>
          <span class="toogler">
            <i class="fas fa-moon" @click="changeTheme"></i>
            {{ theme[0].toUpperCase() + theme.substring(1) }} Mood</span
          >
        </div>
      </div>
    </header>
  </base-card>
</template>

<script>
import baseCard from "../UI/BaseCard.vue";
export default {
  data() {
    return {
      theme: "light",
    };
  },
  methods: {
    changeTheme() {
      if (this.theme == "light") {
        this.theme = "dark";
        document.documentElement.setAttribute("theme", "light");
      } else {
        this.theme = "light";
        document.documentElement.setAttribute("theme", "");
      }
    },
  },
  components: { baseCard },
};
</script>

<style>
header span {
  font-weight: 800;
}
i {
  cursor: pointer;
}
span.toogler {
  font-size: 0.8rem;
  font-weight: 300;
}
</style>
