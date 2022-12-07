<template>
  <p v-if="pending">Loading</p>
  <div v-else>
    <h1 style="font-weight: bold; font-size: 2rem;">Hydrated: {{ hydrated }}</h1>
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