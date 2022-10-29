<script setup>
defineProps({ label: { type: String, required: true } })
</script>

<template>
    <span class="badge">
        <slot>badge</slot>
    </span>
</template>

<style scoped>
.badge {
}
</style>
