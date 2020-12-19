<template>
    <div class="auth-form" >
      <div class="auth-form_wrapper rounded-lg"  >

        <transition name="fade-form" mode="out-in">
          <div class="form-login" v-if="isLogin">
            <v-text-field
                label="E-mail"
                v-model="email"
                hide-details="auto"
                clearable
                prepend-icon="mdi-mail"
                color="alert"
                class="form-input"
                :rules="[rules.required, rules.email]"
            ></v-text-field>
            <v-text-field
                label="Password"
                v-model="password"
                hide-details="auto"
                clearable
                prepend-icon="mdi-key"
                color="alert"
                class="form-input"
                type="password"
                :rules="[rules.required]"
            ></v-text-field>
            <v-btn
                block
                elevation="4"
                class="btn-enter"
                @click="userLogin"
            > Enter</v-btn>
            <button class="create-btn" @click="formReverse">Create an account</button>
          </div>
          <div class="form-reg" v-else>
            <v-text-field
                label="E-mail"
                v-model="email"
                hide-details="auto"
                clearable
                prepend-icon="mdi-mail"
                color="alert"
                class="form-input"
                :rules="[rules.required, rules.email]"
            ></v-text-field>
            <v-text-field
                label="First name"
                v-model="name"
                hide-details="auto"
                clearable
                prepend-icon="mdi-passport"
                color="alert"
                class="form-input"
                :rules="[rules.required]"
            ></v-text-field>
            <v-text-field
                label="Password"
                v-model="password"
                hide-details="auto"
                clearable
                prepend-icon="mdi-key"
                color="alert"
                class="form-input"
                type="password"
                :rules="[rules.required]"
            ></v-text-field>
            <v-btn
                block
                elevation="4"
                class="btn-enter"
                @click="userReg"
            > Enter</v-btn>
            <button class="create-btn" @click="formReverse">Back</button>
          </div>
        </transition>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Login",
  data(){
    return{
      isLogin: true,
      email: null,
      name: null,
      password:null,
      rules: {
        required: value => !!value || 'Required.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      }
    }
  },
  methods:{
    formReverse(){
        this.isLogin = this.isLogin !== true;
    },
    userReg(){
      const userData = {
        email: this.email,
        name: this.name,
        password:this.password
      }

      axios.post('http://localhost:4000/api/user/registration', userData).then((res)=> {
        localStorage.setItem('userData', JSON.stringify({email: this.email, name: this.name, id: res.data._id}))
        this.$store.dispatch("setUserData", {email: this.email, name: this.name, id: res.data._id})
      }).then(() => this.$router.push('/home'))
      //localStorage.userData = userData
    },
    userLogin(){
      const userData = {
        email:this.email,
        password: this.password
      }
      axios.post('http://localhost:4000/api/user/login', userData).then((res)=> {
        if(res.data[0].email === this.email && res.data[0].password === this.password){
          const localData = {email:res.data[0].email, name: res.data[0].name, id: res.data[0]._id}
          this.$store.dispatch("setUserData", localData )
          localStorage.setItem('userData', JSON.stringify(localData))
        }
      }).then(()=> this.$router.push('/home'))
    }
  },
  created() {
    if (localStorage.userData){
      this.$router.push('/home')
    }
  }
};
</script>

<style scoped>
.auth-form{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.auth-form_wrapper{
  background: rgba(43,43,43,0.9);
  border: rgba(187,0,35,0.9) 1px solid;
  padding: 0 20px 20px 20px;
  text-align: center;
}
.form-input{
  margin: 10px 0 10px 0;
}
.btn-enter{
  margin-top: 20px;
}
.create-btn{
  background: none;
  cursor: pointer;
  outline: none;
  border: none;
  margin-top: 10px;
  border-bottom: 1px #ffffff00 solid;
  transition: all .2s ease;
}
.create-btn:hover{
  border-bottom: 1px rgba(187,0,35,0.9) solid ;
}
.fade-form-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-form-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
