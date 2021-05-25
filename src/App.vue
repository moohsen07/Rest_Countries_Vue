<template>
  <div id="app">
    <the-header></the-header>
    <transition
      name="fade"
      mode="out-in"
      :duration="{ enter: 500, leave: 800 }"
    >
      <router-view />
    </transition>
  </div>
</template>
<script>
import TheHeader from "@/components/header/TheHeader.vue";
export default {
  components: { TheHeader },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
