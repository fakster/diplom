<<template>
    <div>
        <form  v-on:submit.prevent ="order">
           <!-- <img class="rounded float-right" src="static/item3.jpg" alt= "image cap">-->
        <div class="form-row">
            <div class="col-md-5 mt-4 pl-5 center ">
                <label for="Comment">Имя</label>
                <input type="text" class="form-control"  v-model="Comment" placeholder="Имя"  required>
                <div class="valid-feedback">
                    Имя
                </div>
                <label for="Type">Фамилия</label>
                <input type="text" class="form-control"  v-model="Type" placeholder="Фамилия"  required>
                <div class="valid-feedback">
                    Фамилия
                </div>
                <label for="Description">Номер телефона</label>
                <input type="text" class="form-control"  v-model="Description" placeholder="Номер телефона"  required>
                <div class="valid-feedback">
                    Номер телефона
                </div>
                 </div>
            </div>
        <button class="btn btn-primary " type="submit">Оформить заказ</button>
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
      Comment: '',
      Type: '',
      Description:''
    } 
  },
  methods:{
      order(){
    axios
    .post('/orders/order', {
          Comment: this.Comment,
      Type: this.Type,
      Description:this.Description
        })
        .then((res) => {
          this.Comment = '';
          this.Type = '';
          this.Description='';
            router.push({ name: 'Profile' }); 
            swal("Молодец, заказ создан","Теперь перейди дальше, чтобы уточнить детали","success")  
        })
        .catch((err) => {
          console.log(err);
        })    
      }
      
  }
}
    
    

</script>