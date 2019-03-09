<template>
  <nav>
    <ul class="list m-0 p-0 flex-auto">
      <li
        class="inline-block ml-4"
        v-for="item in menu"
        :key="item.name">
        <nuxt-link :to="item.href" class="link white fw-700 fs-3">
          {{item.name}}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import menu from '~/assets/menu'

export default {
  data() {
    return{
      menu,
    }
  },
}
</script>
