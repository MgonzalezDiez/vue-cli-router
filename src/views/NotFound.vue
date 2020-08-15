<template>
  <div>
    <h1>Lo que buscas no está aquí</h1>
    <h2>{{ route }}</h2>
  </div>
</template>

<script>
export default {
  computed: {
    route () {
      return this.$route.path
    }
  }
}
</script>
