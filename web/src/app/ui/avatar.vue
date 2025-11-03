<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '../lib/cn'
import { getRandomGradient } from '../lib/color'

const props = defineProps<{
  label?: string
  src?: string | null
  class?: string
}>()

const imageVisible = ref(true)
const onImageError = () => (imageVisible.value = false)

const index = props.label ? props.label.split('').reduce((a, b) => a + b.charCodeAt(0), 0) : 0
</script>

<template>
  <div :class="cn('relative shrink-0 size-8 w-fit overflow-hidden rounded-full', props.class)">
    <img
      v-if="src && imageVisible"
      :src="src"
      :alt="label"
      class="object-cover size-8"
      @error="onImageError"
    />

    <div
      v-else
      :class="
        cn(
          'flex items-center justify-center bg-gradient-to-br shadow-lg relative overflow-hidden text-white font-bold size-8',
          props.class,
        )
      "
      :style="{
        background: `${getRandomGradient(index)}`,
      }"
    >
      <!-- <span class="text-sm">{{ label?.substring(0, 1).toUpperCase() }}</span> -->
      <div class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
      <div class="absolute inset-0 ring-1 ring-inset ring-white/20"></div>
    </div>
  </div>
</template>
