<template>
  <div id="a1" >

    <a-form :label-col="{ span: 10 }" :wrapper-col="{ span: 4 } "  @submit="doRegister">
      <a-form-item label="UserName/Email">
        <a-input
            v-model="userInfo.userName"  v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
        />
      </a-form-item>
      <a-form-item label="password">
        <a-input
            v-model="userInfo.password" v-decorator="['password', { rules: [{ required: true, message: 'Please input your password!' }] }]"   type="password"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit" >
          Register
        </a-button>
      </a-form-item>
    </a-form>
  </div>

</template>

<script>

import Vue from "vue/dist/vue.esm.js";
import {register} from "@/api/user";

const vm = new Vue({
  el: "#a1",
  data: {
    userName: 2,
    password: 3
  },
  components:{
  }
});

export default {
  name: "register",
  data(){
    return {
      form: this.$form.createForm(this, { name: 'horizontal_login' }),
      userInfo: {
        id:"12",
        userName: '2',
        password: '2',
      },
      show: false
    }
  },
  methods : {
    doRegister(){
      let data = this.userInfo
      console.log(data)
      register(data)
    }
  }
}
</script>

<style scoped>

</style>