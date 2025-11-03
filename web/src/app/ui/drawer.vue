<script setup lang="ts">
import { IconX } from '@tabler/icons-vue'
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { cn } from '../lib/cn'

interface Props {
  open: boolean
  title?: string
  hideCloseButton?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{ close: [value: boolean] }>()

const isVisible = ref(false)
const isAnimating = ref(false)

const close = () => {
  isAnimating.value = false
  setTimeout(() => {
    isVisible.value = false
    emit('close', false)
    document.body.style.overflow = ''
  }, 500)
}

const openDrawer = async () => {
  isVisible.value = true
  document.body.style.overflow = 'hidden'
  await nextTick()
  requestAnimationFrame(() => (isAnimating.value = true))
}

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.open) close()
}

watch(
  () => props.open,
  (newVal) => {
    if (newVal) openDrawer()
    else if (isVisible.value) close()
  },
)

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
  if (props.open) openDrawer()
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <div v-if="isVisible" class="fixed inset-0 z-50" @click="close">
      <div
        class="absolute inset-0 bg-black/70 transition-opacity duration-300"
        :class="isAnimating ? 'opacity-100' : 'opacity-0'"
      />

      <div
        class="absolute bottom-0 left-0 right-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col"
        :class="isAnimating ? 'translate-y-0' : 'translate-y-full'"
      >
        <button
          :class="
            cn(
              'bg-white rounded-full p-1 mb-1 size-8 flex items-center justify-center self-end mr-1 transition-all',
              props.hideCloseButton ? 'opacity-0 pointer-events-none' : 'opacity-100',
            )
          "
        >
          <IconX class="size-4" />
        </button>

        <div
          :class="cn('bg-zinc-50 rounded-t-2xl max-h-[90vh] overflow-auto', $attrs.class as string)"
          v-bind="$attrs"
          @click.stop
        >
          <div class="flex-1 p-4 grow flex flex-col">
            <slot />
          </div>

          <div v-if="$slots.footer" class="px-5 py-4 border-t border-white/20">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
