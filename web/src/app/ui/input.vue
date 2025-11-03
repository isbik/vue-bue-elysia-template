```vue
<script setup lang="ts">
import { cn } from '../lib/cn'

interface Props {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  modelValue?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <input
    :value="props.modelValue"
    @input="handleInput"
    :class="
      cn(
        'block w-full rounded-2xl border focus:outline-none focus:ring-2 focus:ring-offset-1 transition-colors disabled:opacity-50 disabled:pointer-events-none',
        [
          // variants
          variant === 'default' && 'border-zinc-300 bg-white text-zinc-900 focus:ring-blue-400',
          variant === 'outline' && 'border-2 border-zinc-400 bg-transparent focus:ring-blue-400',
          variant === 'ghost' && 'border-transparent bg-transparent focus:ring-zinc-200',

          // sizes
          size === 'sm' && 'px-2 py-2 text-sm',
          size === 'md' && 'px-3 py-3 text-base',
          size === 'lg' && 'px-4 py-3 text-lg',
        ]
          .filter(Boolean)
          .join(' '),
        $attrs.class as string,
      )
    "
    v-bind="$attrs"
  />
</template>
```
