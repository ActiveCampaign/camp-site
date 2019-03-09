<template>
  <header class="grid-area-head bg-ocean px-5 py-4">
    <div class="mw-grid mx-auto flex ai-center">
      <Logo />
      <Nav />
    </div>
  </header>
</template>

<script>
import Logo from '~/components/site/Logo'
import Nav from '~/components/site/Nav'

export default {
  components: {
    Logo,
    Nav
  },
}
</script>

<style>
  .grid-area-head {
    grid-area: head;
  }
</style>
