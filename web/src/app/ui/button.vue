<script setup lang="ts">
import type { PropType } from 'vue'
import { cn } from '../lib/cn'

const { variant = 'default', size } = defineProps({
  variant: {
    type: String as PropType<'default' | 'destructive' | 'outline' | 'secondary'>,
    default: 'default',
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
})
</script>

<template>
  <component
    :is="$attrs.is || 'button'"
    :class="
      cn(
        'inline-flex items-center justify-center rounded-2xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
        [
          variant === 'default' && 'bg-blue-400 hover:bg-blue-500 text-white',
          variant === 'destructive' && 'bg-red-500 hover:bg-red-600 text-white',
          variant === 'outline' && 'border border-zinc-200 hover:bg-zinc-100',
          variant === 'secondary' && 'bg-zinc-200 hover:bg-zinc-300',
          size === 'sm' && 'px-2 py-2 text-sm',
          size === 'md' && 'px-4 py-3 text-md',
          size === 'lg' && 'px-6 py-4 text-lg',
        ]
          .filter(Boolean)
          .join(' '),
        $attrs.class as string,
      )
    "
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>
