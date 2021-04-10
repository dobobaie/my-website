<template>
  <div class="text-left">
    <v-chip
      v-for="(pin, index) in pins"
      :key="'chip_' + index"
      class="ma-1 pa-0"
      pill
      :small="maxWidth === '24'"
    >
      <v-avatar :max-width="maxWidth">
        <v-img :src="getAvatar(pin)" contain />
      </v-avatar>
    </v-chip>
  </div>
</template>

<script>
export default {
  props: {
    pins: {
      type: Array,
      default: () => [],
    },
    maxWidth: {
      type: String,
      default: '24',
    },
  },
  methods: {
    getAvatar(name) {
      switch (name) {
        case 'nodejs':
          return './techno/nodejs.png'
        case 'vuejs':
          return './techno/vuejs.webp'
        case 'docker':
          return './techno/docker.jpg'
        case 'angularjs':
          return './techno/angularjs.webp'
        case 'csharp':
          return './techno/csharp.svg'
        case 'electron':
          return './techno/electron.png'
        case 'ionic':
          return './techno/ionic.png'
        case 'mongodb':
          return './techno/mongodb.png'
        case 'more':
          return './techno/more.webp'
        case 'nuxt':
          return './techno/nuxt.png'
        case 'php':
          return './techno/php.png'
        case 'postgresql':
          return './techno/postgresql.webp'
        case 'rabbitmq':
          return './techno/rabbitmq.png'
        case 'react':
          return './techno/react.svg'
        case 'redis':
          return './techno/redis.png'
        case 'firebase':
          return './techno/firebase.png'
        case 'google-cloud':
          return './techno/google-cloud.png'
        case 'aws':
          return './techno/aws.png'
        case 'vr':
          return './techno/vr.png'
        case 'unity':
          return './techno/unity.webp'
        default:
          console.log('===', name)
          return ''
      }
    },
  },
}
</script>
