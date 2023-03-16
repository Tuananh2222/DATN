import VCalendar from 'v-calendar'

export default defineNuxtPlugin(({ vueApp }) => {
  if (process.client) {
    vueApp.use(VCalendar, {})
  }
})