<template>
  <button class="rounded shadow">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  all: unset;
  background-color: var(--background-elements);
  padding: 5px 25px;
  font-size: 14px;
}
</style>
