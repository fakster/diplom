<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent ="login">
          <h1 class="h3 mb-3 font-weight-normal"><img class ="image" src="static/logo.png"></h1>
          <div class="form-group">
            <label for="email">E-mail</label>
            <font-awesome-icon icon="address-book" />
            <input
              type="email"
              v-model="email"
              class="form-control"
              name="email"
              placeholder="Введите Email"
              required
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
              required
            />
          </div>
          <button type="submit" class="btn btn-lg btn-primary btn-block" >Войти</button>
          <p class="text"><small class="text-muted" >Если вы еще не зарегистрированы, то можете <router-link to="/register">зарегистрироваться</router-link> </small></p>
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
</style>

<script>
import axios from 'axios'
import router from '../router'
import EventBus from './EventBus'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      if( this.password.length > 5){
      axios
        .post('/users/login', {
          email: this.email,
          password: this.password
        })
        .then((res) => {
          localStorage.setItem('usertoken', res.data);
          this.email = '';
          this.password = '';
          if(res){
            this.emitMethod();
            router.push({ name: 'Profile' });   
           }
        })
        .catch((err) => {
          console.log(err);
          swal("Упс, похоже что логин или пароль неверны", "Попробуйте еще раз", "error")
        }) 
      }    
    },
    emitMethod() {
      EventBus.$emit('logged-in', 'loggedin');
    }
  }
};
</script>
