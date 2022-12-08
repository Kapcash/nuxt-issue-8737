<template>
  <p v-if="pending" class="text-orange-500">Loading</p>
  <div v-else class="p-12">
    <h1 class="font-bold text-xl">Hydrated: {{ hydrated }}</h1>
    {{ data!.length }} todos found.
    <ul v-for="todo of data">
      <li>{{ todo.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const hydrated = ref(false)

const { data, pending } = await useAsyncData('todos', () => $fetch<{ title: string }[]>('https://jsonplaceholder.typicode.com/posts?_limit=10'))

onMounted(() => {
  console.log('MOUNTED')
  hydrated.value = true
})
</script>