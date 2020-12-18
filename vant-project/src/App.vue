<template>
  <div id="app">
    <router-view />
    <van-tabbar route>
      <van-tabbar-item
        replace
        v-for="(e, i) in menus"
        :key="i"
        :to="e.to"
        :name="e.value"
        :icon="e.icon"
        >{{ e.name }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          name: "看板",
          value: 1,
          to: "/charts",
          icon: "home-o",
        },
        {
          name: "管理",
          value: 2,
          to: "/manage",
          icon: "setting-o",
        },
        {
          name: "视图",
          value: 3,
          to: "/view",
          icon: "search",
        },
        {
          name: "我的",
          value: 4,
          to: "/my",
          icon: "friends-o",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
