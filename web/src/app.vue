<script setup lang="ts">
import Toaster from './app/ui/toaster.vue'
</script>

<template>
  <router-view v-slot="{ Component }">
    <template v-if="Component">
      <component :is="Component" />
    </template>
  </router-view>

  <Toaster />
</template>
