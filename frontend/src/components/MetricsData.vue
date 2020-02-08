<template>
  <div>
    <div v-if="this.getUser">
      <div v-if="this.getUserLatestData">
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Temperature</p>
              <p class="title">{{ getUserLatestData.temperature }}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Humidity</p>
              <p class="title">{{ getUserLatestData.humidity }}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">GPS Location</p>
              <p class="title">{{ getUserLatestData.location }}</p>
            </div>
          </div>
          <!-- <div class="level-item has-text-centered">
            <div>
              <p class="heading">Last Update</p>
              <p class="title">{{ lastestData.date }}</p>
            </div>
          </div>-->
          <!-- <div class="level-item has-text-centered">
            <div>
              <p class="heading">Submitted</p>
              <p class="title">25 times</p>
            </div>
          </div>-->
        </nav>
      </div>
      <div v-else>
        <h1 class="title">No Data Has Been Recorded</h1>
      </div>
    </div>
    <div v-else>
      <h1 class="title">Please Sign In To Track Metrics</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MetricsData',
  computed: mapGetters(['getUser', 'getUserLatestData'])
}
</script>
