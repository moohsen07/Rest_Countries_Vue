<template>
  <div class="base-card shadow rounded">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.base-card {
  background: var(--background-elements);
  overflow: hidden;
}
</style>
