<script setup>
defineProps({ label: { type: String } });
</script>

<template>
  <button class="btn">
    <template v-if="label">
      {{ label }}
    </template>
    <template v-else>
      <slot>label</slot>
    </template>
  </button>
</template>

<style scoped>
.btn {
}
</style>
