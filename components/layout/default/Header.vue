<template>
  <SearchBox v-if="isShowSearch" @close-search="handleHideSearch" />
  <div class="header">
    <div class="img-logo">
      <div class="main-logo"></div>
    </div>
    <div class="header-menu">
      <li v-for="(item, index) in headerList" :key="index" class="menu-item" @click="nextPageUser(item.to)">
        <a>{{ item.text }}</a>
      </li>
    </div>
    <div class="header-icons">
      <div class="icon" @click="handleLogin">
        <font-awesome-icon icon="fa-user" />
      </div>
      <div class="icon">
        <font-awesome-icon icon="fa-clipboard" />
      </div>
      <div class="icon">
        <font-awesome-icon icon="fa-heart" />
      </div>
      <div class="icon" @click="handleShowSearch">
        <font-awesome-icon icon="fa-search" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SearchBox from '~~/components/generals/SearchBox.vue'
const { state, init } = useHeaderStore()
const emits = defineEmits(['nextTo'])
onMounted(() => {
  init()
  // console.log(state.headerList)
})
const isShowSearch = ref(false)

const handleShowSearch = () => {
  isShowSearch.value = true
}
const handleHideSearch = () => {
  isShowSearch.value = false
}

const nextPageUser = (router: any) => {
  navigateTo(router)
}
const handleLogin = () => {
  navigateTo('/login')
}

const headerList = [
  {
    text: 'Trang chủ',
    to: '/',
  },
  {
    text: 'About US',
    to: '/about',
  },
  {
    text: 'Contact',
    to: '/contact',
  },
  {
    text: 'Blog',
    to: '/blog',
  },
]
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  background-color: $white;
  display: flex;
  align-items: center;
  height: fit-content;
  width: 100%;
  white-space: nowrap;
  flex-shrink: 0;
  font-weight: 600;
  font-size: 15px;
  border-bottom: 1px solid rgba(44, 45, 42, 0.25);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 6;
  padding: 10px 0;
  margin-bottom: 20px;
  @include sp {
    width: calc(100% + 20px);
    margin-left: -10px;
  }
  .img-logo {
    padding-left: 20px;
    .main-logo {
      background: url('@/public/image/logo.jpg');
      background-position: center;
      height: 60px;
      width: 60px;
      border-radius: 50%;
    }
  }
  .header-menu {
    display: flex;
    align-items: center;
    margin-left: auto;
    .menu-item {
      cursor: pointer;
      padding: 10px 20px;
      list-style: none;
    }
  }
  .header-icons {
    margin-left: auto;
    display: flex;
    align-items: center;
    .icon {
      cursor: pointer;
      padding-right: 20px;
    }
  }
}
</style>
