<template>
  <div class="grid-area-main">
    <section class="bg-ocean white px-5 py-10 mb-8">
      <header class="mw-grid mx-auto ">
        <h1 class="title-3 m-0 mb-8">
          Design for everyone through a shared language
        </h1>

        <nuxt-link
          class="link inline-block br-1 bg-mint hover-bg-120 white fs-6 fw-500 py-4 px-8"
          to="/introduction">
          What is Camp?
        </nuxt-link>
      </header>
    </section>

    <section class="px-5 py-8">
      <div class="mw-grid mx-auto">
        <h2 class="m-0 mb-4 title-2">Get Started</h2>
        <p class="m-0 fs-6">
          Whether you are a product manager, developer or a product designer, this styleguide is a common resource to allow anyone to access ActiveCampaign’s design language.
        </p>
      </div>
    </section>

    <section class="px-5 py-8">
      <div class="mw-grid mx-auto grid g-cols gap-m">
        <div
          class="g-col-12 s--g-col-6 m--g-col-4 mb-4"
          v-for="card in cards"
          :key="card.heading">
          <h3 class="m-0 mb-2 fs-6 fw-700">{{card.heading}}</h3>
          <p class="m-0 mb-2">{{card.description}}</p>
          <nuxt-link :to="card.href" class="link ocean">
            {{card.linkText}}
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [{
        heading: 'Logo',
        description: 'Resources to help you learn how to effectively use our logo within your projects.',
        linkText: 'Explore Our Logo',
        href: '/brand/logo',
      },{
        heading: 'Typography',
        description: 'Learn about what type faces we use and how to use them effectively in your projects.',
        linkText: 'Explore Our Typography',
        href: '/brand/typography',
      },{
        heading: 'Colors',
        description: 'Color palettes, guides and helpful resources to help you use color in your project.',
        linkText: 'Explore our colors',
        href: '/brand/colors',
      },{
        heading: 'Grid',
        description: 'Learn how we place elements within our set grid and how to space elements within it.',
        linkText: 'Explore our grid',
        href: '/brand/grid',
      },{
        heading: 'Illustrations',
        description: 'Find out how we create our illustrations guidelines and how to use them effectively.',
        linkText: 'Explore our illustrations',
        href: '/brand/illustrations',
      },{
        heading: 'Library',
        description: 'Download templates for our commonly re-used materials so you can create your own.',
        linkText: 'Explore the library',
        href: '/resources/library',
      }]
    }
  }
}
</script>

<style>
  .grid-area-main {
    grid-area: main;
  }
</style>
