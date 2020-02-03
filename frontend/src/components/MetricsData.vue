<template>
  <div>
    <nav class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Temperature</p>
          <p class="title">{{ getUser.data.temperature }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Humidity</p>
          <p class="title">{{ getUser.data.humidity }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">GPS Location</p>
          <p class="title">{{ getUser.data.location }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Last Update</p>
          <p class="title">{{ getUser.data.date }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Submitted</p>
          <p class="title">25 times</p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MetricsData',
  computed: mapGetters(['getUser'])
}
</script>
