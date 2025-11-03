<script lang="ts" setup>
import { cn } from '../lib/cn'

const { progress } = defineProps<{
  progress: number
}>()

const progressStyle = computed(() => {
  if (progress === 0) {
    return {
      background: '#d4d4d855',
    }
  }

  return {
    background: `conic-gradient(#51a2ff ${progress * 3.6}deg, #d4d4d855 ${progress * 3.6}deg)`,
  }
})
</script>

<template>
  <div
    v-bind="$attrs"
    :class="
      cn('relative w-48 h-48 shrink-0 flex items-center justify-center', $attrs.class as string)
    "
  >
    <div
      class="absolute w-full h-full rounded-full animate-spin-slow bg-blue-500"
      :style="progressStyle"
    ></div>
    <div class="absolute inset-[16px] bg-white rounded-full flex items-center justify-center">
      <span class="text-3xl font-semibold">
        <slot />
      </span>
    </div>
  </div>
</template>
