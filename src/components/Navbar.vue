<template>
  <div class="header">
    <header class="navbar navbar-expand navbar-dark flex-column flex-md-row bg-dark rounded">
      <div class="collapse navbar-collapse justify-content-md-left" id="navbar1">
        <ul class="navbar-nav bd-navbar-nav flex-row">
          <li class="nav-item" >
            <router-link class="nav-link" to="/"><font-awesome-icon icon="home"/></router-link>
          </li>
          <li v-if="auth=='' " class="nav-item">
            <router-link class="nav-link" to="/login">Логин</router-link>
          </li>
          <li v-if="auth==''" class="nav-item">
            <router-link class="nav-link" to="/register">Регистрация</router-link>
          </li>
          <li v-if="auth=='' " class="nav-item">
            <router-link class="nav-link" to="/about">О нас</router-link>
          </li>
          <li v-if="auth=='' " class="nav-item">
            <router-link class="nav-link" to="/review">Отзывы</router-link>
          </li>
          <li v-if="auth=='loggedin'" class="nav-item">
            <router-link class="nav-link" to="/info">Создать заказ</router-link>
          </li>
          <li v-if="auth=='loggedin' " class="nav-item">
            <router-link class="nav-link" to="/profile">Профиль</router-link>
          </li>
          <li v-if="auth=='loggedin' " class="nav-item">
            <router-link class="nav-link" to="/admin">Admin Page</router-link>
          </li>
          <li v-if="auth=='loggedin'" class="nav-item">
            <a class="nav-link" href v-on:click="logout">Выход</a>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>
<style scoped>
img.image {
  display:block;
  margin-left:auto;
  margin-right: auto;
}
</style>

<script>
import EventBus from "./EventBus";

EventBus.$on('logged-in',test=>{
  console.log(test)
})
export default {
  data() {
    return {
      auth: '',
      user:''
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("usertoken")
    }
  },
  mounted() {
    EventBus.$on("logged-in", status => {
      this.auth = status;
    })
  }
}
</script>