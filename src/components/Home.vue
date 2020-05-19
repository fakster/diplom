<template>
    <div class="container1">
        <div class="jumbotron mt-5 pb-4">
            <div class="container">
                <div class="col-sm-8 mx-auto">
                    <h1 class="display-3"> Teiwaz</h1>
                    <p>Мы современная компания разработчиков, готовая воплотить ваши мечты</p>
                </div>
            </div>
            <div class="container">
                <h2 class="display-3"></h2>
                <p> </p>
            </div>
        </div>
        <body>
            <section>
                <p>Дарова я секция
                </p>
            </section>
            <div class="container">
                <div class="card-deck">
                    <div class="card">
                        <img class="card-img-top" src="static/21-sajt-lending-cho-eto-takoe.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Лендинг</h5>
                            <p class="card-text">Благодаря Landing Page вы сможете эффективно реализовывать продажи, генерировать возможных клиентов и выстраивать с ними отношения. Весь дизайн согласуем дизайн с вами.</p>
                            <button class="btn btn-lg btn-primary btn-block" v-on:click="order">Заказать</button>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="static/website.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Средний сайт</h5>
                            <p class="card-text">Любые сайты для малого и среднего бизнеса. От 15000 рублей под ключ. А также предоставим сервер для вашего сайта на 1 месяц бесплатно.</p>
                            <button class="btn btn-lg btn-primary btn-block" v-on:click="order">Заказать</button>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="static/web-developers.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Интернет-магазин</h5>
                            <p class="card-text"> Для оптимизации вашего бизнеса, мы создадим для вас интернет магазин, с понятным для вас интерефейсом. А также предоставим необходимы инструкции по эксплутации. </p>
                            <button class="btn btn-lg btn-primary btn-block" v-on:click="order">Заказать</button>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        <footer class="page-footer font-small white pt-4">
                <div class="container-fluid text-center text-md-left">
                    <div class="row"> 
                        <div class="col-md-6 mt-md-0 mt-3">
                            <h5 class="text-uppercase">Teiwaz</h5>
                            <p>Мы современная компания разработчиков, готовая воплотить ваши мечты</p>
                    </div>
                    <hr class="clearfix w-100 d-md-none pb-3">
                     <div class="col-md-3 mb-md-0 mb-3">
                         <h5 class="text-uppercase">Links</h5>
                    <ul class="list-unstyled">
                    <li>
                        <a  href="https://vk.com/id123614571"  target="_blank"  >
                        Telegram
                        </a>
                    </li>
                    <li>
                        <a  href="https://vk.com/id123614571"  target="_blank"  >
                        Vk.com
                        </a>
                    </li>
                    <li>
                        <a  href="https://twitter.com/fakster88"  target="_blank" >
                        Twitter
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/fakster" target="_blank" >
                        Github
                        </a>
                    </li>
                    </ul>
                     </div>
                </div>
           </div>
            <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://vk.com/id123614571"> Mikhail Shishkin</a>
            </div>   
        </footer>
    </div>
</template>



<script>
import router from '../router'
export default {
    data:{
        name:'Vue.js'
    },
    methods:{
        order: function(event){
            
            if(event){router.push({name:'Login'});}
        }
        
    }
    
}
</script>