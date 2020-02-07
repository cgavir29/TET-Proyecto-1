<template>
  <div id="metrics">
    <section class="hero is-fullheight is-warning is-bold">
      <div class="hero-body">
        <div class="container">
          <MetricsData />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MetricsData from '@/components/MetricsData.vue'

export default {
  name: 'Metrics',
  components: {
    MetricsData
  }
}
</script>
