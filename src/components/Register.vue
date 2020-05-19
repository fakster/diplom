<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="register">
          <h1 class="h3 mb-3 font-weight-normal"><img class ="image" src="static/logo.png"></h1>
          <div class="form-group">
            <label for="login">Login</label>
            <input
              type="login"
              v-model="login"
              class="form-control"
              name="login"
              placeholder="Введите Логин"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <font-awesome-icon icon="lock"/>
            <input
              type="password"
              v-model="password"
              class="form-control"
              name="password"
              placeholder="Введите Пароль"
              minlength="6"
            />
            <div class="form-group">
              <label for="email">Email</label>
              <font-awesome-icon icon="address-book"/>
              <input
                type="email"
                v-model="email"
                class="form-control"
                name="email"
                placeholder="Введите Email"
              />
            </div>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Регистрация</button>
          <p class="text"><small class="text-muted">Если забыли пароль кликните <router-link to="/">сюда</router-link> </small></p>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
img{
  margin-left: 170px;
  padding-top:0%
}
p.router-link-active{
  color:blue;
}
</style>
<script>
import axios from "axios";
import router from "../router";

export default {
  data() {
    return {
      login: " ",
      password: " ",
      email: " "
    };
  },
  methods: {
    register() {
      axios
        .post('/users/register', {
          login: this.login,
          password: this.password,
          email: this.email
        })
        .then(res => {
          if(res){
          this.login = '';
          this.password = '';
          this.email = '';
          swal("Вы успешно зарегестрировались", "Ожидайте письмо на почту, с потверждением", "success")
          router.push({ name: "Login" });}
          else{ swal("Пользователь с таким e-mail уже существует", "Если вы забыли пароль, то можетет его восстановить", "error")

          }
        })
        .catch(err => {
          console.log(err);
          swal("Пользователь с таким e-mail уже существует", "Если вы забыли пароль, то можетет его восстановить", "error")
        });
    }
  }
};
</script>