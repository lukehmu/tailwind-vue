<template>
  <div class="bg-blue">
    <h1>{{ intro }}</h1>
    <hello-component name="Ruth" />
  </div>
</template>

<script>
import HelloComponent from './components/HelloComponent.vue'
export default {
  components: {
    HelloComponent
  },
  props: {
    intro: {
      type: String,
      // value: 'Intro text'
      default: 'Intro text'
    }
  }
}
</script>
