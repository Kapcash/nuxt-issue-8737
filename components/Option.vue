<template>
  <Switch v-model="activated" :class="activated ? 'bg-blue-600' : 'bg-gray-200'" class="relative inline-flex h-6 w-11 items-center rounded-full">
    <span aria-hidden="true" :class="activated ? 'translate-x-6' : 'translate-x-1'" class="inline-block h-4 w-4 transform rounded-full bg-white transition" />
  </Switch>
</template>

<script setup lang="ts">
import { Switch } from '@headlessui/vue'
const activated = ref(false)
</script>