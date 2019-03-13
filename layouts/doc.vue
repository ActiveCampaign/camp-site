<template>
  <div class="layout fs-4">
    <Header />
    <nuxt/>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/site/Header'
import SideNav from '~/components/site/SideNav'
import Footer from '~/components/site/Footer'

export default {
  components: {
    Header,
    SideNav,
    Footer
  }
}
</script>

<style>
  .layout {
    grid-template-areas: 'head head'
                         'main main'
                         'foot foot';
  }

  .content-area {
    grid-area: 'content';
  }
</style>
