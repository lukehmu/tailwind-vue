<template>
  <h1 class="text-white">Hello {{ name }}!</h1>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
