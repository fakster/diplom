<template>
    <div >
        <form v-on:submit.prevent="info">
    <img class="rounded float-right" src="static/item3.jpg" alt= "image cap">
        <div class="form-row">
            <div class="col-md-5 mt-4 pl-5 center ">
                
                <label for="First_name">Имя</label>
                <input type="First_name" class="form-control"  v-model="First_name" placeholder="Имя"  required>
                <div class="valid-feedback">
                    Имя
                </div>
                <label for="Second_name">Фамилия</label>
                <input type="Second_name" class="form-control"  v-model="Second_name" placeholder="Фамилия"  required>
                <div class="valid-feedback">
                    Фамилия
                </div>
                <label for="Number_of_phone">Номер телефона</label>
                <input type="Number_of_phone" class="form-control"  v-model="Number_of_phone" placeholder="Номер телефона"  required>
                <div class="valid-feedback">
                    Номер телефона
                </div>
                 <label for="Name_of_Organize">Название организации</label>
                <input type="Name_of_Organize" class="form-control"  v-model="Name_of_Organize" placeholder="Название организации"  required>
                <div class="valid-feedback">
                    Название организации
                </div>
              <!-- <label for="City">Город</label>
                <input type="text" class="form-control"  v-model="city" placeholder="Город" required>
                <div class="invalid-feedback">
                    Введите город
                </div>
                <label for="SerNum">Серия и номер паспорта</label>
                <input type="text" class="form-control" id="numSeriesPass" v-model="numSeriesPass" placeholder="0000000000" required>
                <div class="invalid-feedback">
                    Введите номер и серию паспорта
                </div>
                    <label for="zip">Адрес регистрации</label>
                    <input type="text" class="form-control" id="billingAddress" v-model="billingAddress" placeholder="Ул. Ленина 2 , корпус 2, кваритра 14" required>
                    <div class="invalid-feedback">
                        Введите адрес регистрации
                    </div>
             </div>
        </div>
        <div class="form-group">
            <div class="form-check pl-5 ">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
            <label class="form-check-label" for="invalidCheck">
                Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
                You must agree before submitting.
            </div>-->
            
            <button class="btn btn-primary" type="submit">Оформить заказ</button>
                
            </div>
        </div>
        </form>       
    </div>
</template>

<style scoped>
button{
    margin-left: 30px;
}
</style>
<script>
import router from '../router'
import axios from 'axios'
import EventBus from'./EventBus'

export default {
    data() {
    return {
     First_name:'',
    Second_name:'',
    Number_of_phone:'',
    Name_of_Organize:''
    }; 
  },
  methods: {
      info() {
    axios
    .post('/users/info', {
          First_name:this.First_name,
          Second_name:this.Second_name,
          Number_of_phone:this.Number_of_phone,
          Name_of_Organize:this.Name_of_Organize
        })
        .then((res) => {
          First_name ='';
            Second_name ='';
            Number_of_phone ='';
            Name_of_Organize = '';
            router.push({ name: 'Order' }); 
            swal("Ты добавил инфо о себе, ты на верном пути","Еще немного информации, и мы начнем готовить ваш заказ","success")  
        })
        .catch((err) => {
          console.log(err);
        })    
      }
      
  }
};
</script>
