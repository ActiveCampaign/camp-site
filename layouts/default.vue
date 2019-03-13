<template>
  <div class="layout fs-4">
    <Header />
    <nuxt/>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/site/Header'
import Footer from '~/components/site/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  .layout {
    grid-template-areas: 'head head'
                         'side main'
                         'side foot';
  }
</style>
