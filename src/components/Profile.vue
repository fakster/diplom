<template>
  <div class="container">
    <div class="jumbotron pb-3">
      <nav class=" nav flex-column ">
            <a class="nav-link active" href="#!">Личные данные</a>
            <a class="nav-link" href="#!">Сбросить пароль</a>
            <a class="nav-link" href="#!">Изменить данные</a>
          </nav>
      <div class="col-sm-8 mx-auto">
        <h1 class="text-center">PROFILE</h1>
      </div>
      <table class="table col-md-6 mx-auto pb-3" >
        <tbody>
          <tr>
            <td>Fist Name</td>
            <td>Mikhail</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>Shishkin</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{{email}}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
 
</template>
<style scoped>
table{
  padding-bottom: 300 px;
}
</style>
<script>
import router from '../router'
import axios from 'axios'

export default {
  data () {
    const token = localStorage.usertoken

    return {
      email: '',
      token: token
    }
  },
  methods: {
    getuser () {
      axios.get('/users/profile', {
        headers: { 'Authorization': this.token }
      }).then(res => {
        this.email = res.data.email
      }).catch(err => {
        console.log(err)
        router.push({ name: 'Login' })
      })
    }
  },
  mounted () {
    this.getuser()
  }
}
</script>