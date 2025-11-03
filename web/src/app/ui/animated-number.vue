<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

interface Props {
  value: number | string
  duration?: number
  decimals?: number
  easing?: 'linear' | 'easeInOut' | 'easeOut' | 'easeIn'
  autoplay?: boolean
  prefix?: string
  suffix?: string
  separator?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  duration: 1000,
  decimals: 2,
  easing: 'easeOut',
  autoplay: true,
  prefix: '',
  suffix: '',
  separator: ',',
})

const displayValue = ref('')
const currentValue = ref<string | number>(0)

const easingFunctions = {
  linear: (t: number) => t,
  easeInOut: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  easeOut: (t: number) => t * (2 - t),
  easeIn: (t: number) => t * t,
}

const formatNumber = (num: number | string): string => {
  const fixed = Number(num).toFixed(props.decimals)
  const parts = fixed.split('.')

  if (props.separator && parts[0]) {
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, props.separator)
  }

  const formatted = parts.join('.')
  return `${props.prefix}${formatted}${props.suffix}`
}

const animate = (from: number | string, to: number | string) => {
  const startTime = Date.now()
  const diff = Number(to) - Number(from)

  const step = () => {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / props.duration, 1)
    const easedProgress = easingFunctions[props.easing](progress)

    currentValue.value = Number(from) + diff * easedProgress
    displayValue.value = formatNumber(currentValue.value)

    if (progress < 1) {
      requestAnimationFrame(step)
    } else {
      currentValue.value = Number(to)
      displayValue.value = formatNumber(to)
    }
  }

  requestAnimationFrame(step)
}

const startAnimation = () => {
  animate(currentValue.value, props.value)
}

watch(
  () => props.value,
  (newVal) => {
    if (props.autoplay) {
      animate(currentValue.value, newVal)
    }
  },
)

onMounted(() => {
  if (props.autoplay) {
    currentValue.value = 0
    animate(0, props.value)
  } else {
    currentValue.value = props.value
    displayValue.value = formatNumber(props.value)
  }
})

defineExpose({
  startAnimation,
})
</script>

<template>
  <span :class="props.class">{{ displayValue }}<slot /> </span>
</template>

<style scoped>
span {
  display: inline-block;
  font-variant-numeric: tabular-nums;
}
</style>
