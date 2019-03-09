<template>
  <footer class="grid-area-foot px-5 py-4 fs-3 bt bw-1 bc-slate-20">
    <section class="mw-grid mx-auto">
      <div class="grid g-cols gap-m">
        <div class="g-col-12 s--g-col-6">
          <a
            class="link slate-60 hover-slate"
            href="https://www.activecampaign.com">
            ActiveCampaign
          </a>
        </div>

        <nav class="g-col-12 s--g-col-6 s--ta-right">
          <ul class="list m-0 p-0">
            <li class="inline-block">
              <nuxt-link
                class="link ocean"
                to="/introduction"
                title="Introduction to Camp">
                Introduction
              </nuxt-link>
            </li>
            <li class="inline-block">
              <nuxt-link
                class="link ocean ml-4"
                to="/changes"
                title="What's new to Camp?">
                What&rsquo;s new?
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  </footer>
</template>

<style>
  .grid-area-foot {
    grid-area: foot;
  }
</style>
