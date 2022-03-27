<template>
  <div id="a1" >

    <a-form :label-col="{ span: 10 }" :wrapper-col="{ span: 4 } "  @submit="doLogin">
    <a-form-item label="UserName/Email">
      <a-input
          v-model="userInfo.username"  v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
      />
    </a-form-item>
    <a-form-item label="password">
      <a-input
          v-model="userInfo.password" v-decorator="['password', { rules: [{ required: true, message: 'Please input your password!' }] }]"   type="password"
      />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit" >
        Log in
      </a-button>
    </a-form-item>
    </a-form>
    <div>
      <a-row>
        <a-col :offset="10" :span="4">
          <a-alert  message="Warning text"  banner />
        </a-col>
      </a-row>
      <br />
    </div>
  </div>
</template>

<script>
import Vue from "vue/dist/vue.esm.js";
import {login} from "@/api/user";

const vm = new Vue({
  el: "#a1",
  data: {
    username: 2,
    password: 3
  }
});

export default {
  name: "Login",
  data(){
    return {
      userInfo: {
        userId: '1',
        username: '1',
        password: '1',
        grant_type: 'password',
        client_id: 'client-app',
        client_secret: '5545125',
        scope : 'all'
      },
      show: false
    }
  },
  methods : {
    doLogin(){
      let s = "username=" + this.userInfo.username +"&";
      s += "password=" + this.userInfo.password +"&";
      s += "grant_type=" + this.userInfo.grant_type +"&";
      s += "client_id=" + this.userInfo.client_id +"&";
      s += "client_secret=" + this.userInfo.client_secret +"&";
      s += "scope=" + this.userInfo.scope +"&";
      console.log(s, this.userInfo)
      login(s, this.userInfo.username)
    }
  }
}
</script>

<style scoped>

</style>