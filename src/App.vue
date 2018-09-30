<template>
  <div class="bg-blue">
    <h1>Hello World!</h1>
    <hello-component name="LUKE" />
  </div>
</template>

<script>
import HelloComponent from './components/HelloComponent.vue'
export default {
  components: {
    HelloComponent
  }
}
</script>
