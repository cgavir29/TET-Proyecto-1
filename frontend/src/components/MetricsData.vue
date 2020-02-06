<template>
  <div>
    <nav class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Temperature</p>
          <p class="title">{{ lastestData.temperature }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Humidity</p>
          <p class="title">{{ lastestData.humidity }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">GPS Location</p>
          <p class="title">{{ lastestData.location }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Last Update</p>
          <p class="title">{{ lastestData.date }}</p>
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
  data () {
    return {
      lastestData: null
    }
  },
  computed: mapGetters(['getUser']),
  created () {
    this.lastestData = this.getUser.data[this.getUser.data.length - 1]
  }
}
</script>
