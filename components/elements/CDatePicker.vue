<template>
  <div class="dx-field-value">
    <DxDateBox :value="now" type="date" :display-format="$dayjs" />
  </div>
</template>

<script setup lang="ts">
import DxDateBox from 'devextreme-vue/date-box'
const { $dayjs } = useNuxtApp()

const now = new Date()
</script>

<style scoped></style>
