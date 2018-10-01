<template>
  <h1 class="text-white">Hello <span class="italic">{{ name }} </span>!</h1>
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
